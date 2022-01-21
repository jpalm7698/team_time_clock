from datetime import date
from dateutil import parser
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy import func, event
from sqlalchemy.engine import Engine
from sqlalchemy.types import DateTime, Date
from flask_restful import Api, Resource
from flask_cors import CORS

app = Flask(__name__)

# Use the 'origins' kwarg to add a list of acceptable origins (i.e., frontend spa)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/team_h_1.db"


@event.listens_for(Engine, "connect")
def set_sqlite_pragma(dbapi_connection, connection_record):
    """Enables foreign key support on SQLite3 db"""
    cursor = dbapi_connection.cursor()
    cursor.execute("PRAGMA foreign_keys=ON")
    cursor.close()


db = SQLAlchemy(app)
ma = Marshmallow(app)
api = Api(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    time_created = db.Column(DateTime(timezone=True),
                             server_default=func.current_timestamp())
    log_entries = db.relationship(
        'LogEntry', back_populates='user', passive_deletes=True)


class LogEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    time_created = db.Column(DateTime(timezone=False),
                             server_default=func.current_timestamp())
    time_updated = db.Column(DateTime(timezone=False),
                             onupdate=func.current_timestamp())
    workday = db.Column(Date())
    description = db.Column(db.Text, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id',
                        onupdate='CASCADE', ondelete='CASCADE'),
                        nullable=False)
    user = db.relationship('User', back_populates='log_entries')


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User
        # load_instance = True


class LogEntrySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = LogEntry
        # load_instance = True
        include_fk = True


user_schema = UserSchema()
user_schemas = UserSchema(many=True)
log_entry_schema = LogEntrySchema()
log_entry_schemas = LogEntrySchema(many=True)


@app.route('/greeting/')
def hello_world():
    return jsonify(
        {'msg': 'Welcome to Team Hours Logger API!'}
        )


@app.route('/reset-database/')
def reset_database():
    # to be requested when running test collections in postman
    db.drop_all()
    db.create_all()
    db.session.commit()
    return 'Database was reset.'


class UserListResource(Resource):
    def get(self):
        users = User.query.all()
        return jsonify(user_schemas.dump(users))

    def post(self):
        name = request.json.get('name', '')
        user = User(name=name)

        db.session.add(user)
        db.session.commit()

        return user_schema.jsonify(user)


class UserResource(Resource):
    def get(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        return user_schema.jsonify(user)

    def put(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        user.name = request.json.get('name', '')
        db.session.commit()
        return user_schema.jsonify(user)

    def delete(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        db.session.delete(user)
        db.session.commit()
        return '', 204


class LogEntryListResource(Resource):
    def get(self):
        logs = LogEntry.query.all()
        return jsonify(log_entry_schemas.dump(logs))

    def post(self):
        user_id = request.json.get('user_id', '')
        workday = parser.parse(request.json.get('workday', ''))
        description = request.json.get('description', '')

        log_entry = LogEntry(user_id=user_id, description=description, 
                             workday=workday)

        db.session.add(log_entry)
        db.session.commit()

        return log_entry_schema.jsonify(log_entry)


class LogEntryResource(Resource):
    def get(self, log_id):
        log = LogEntry.query.filter_by(id=log_id).first()
        return log_entry_schema.jsonify(log)

    def put(self, log_id):
        log = LogEntry.query.filter_by(id=log_id).first()
        log.workday = parser.parse(request.json.get('workday', ''))
        log.description = request.json.get('description', '')
        db.session.commit()
        return log_entry_schema.jsonify(log)

    def delete(self, log_id):
        log = LogEntry.query.filter_by(id=log_id).first()
        db.session.delete(log)
        db.session.commit()
        return '', 204


api.add_resource(UserListResource, '/users/')
api.add_resource(UserResource, '/users/<int:user_id>/')
api.add_resource(LogEntryListResource, '/log-entries/')
api.add_resource(LogEntryResource, '/log-entries/<int:log_id>/')

if __name__ == '__main__':
    app.run(debug=True)
