# Project/Lesson Notes:
## DB Setup:
- When starting your API for the first time, you need to have run db.create_all() and db.session.commit() before doing so. Otherwise your SQLite DB will not be properly initiated and you will receive an sqlalchemy.exec.OperationalError.

- AFAIK you can only interact with the db while the flask app is running. Thus, you can either input sqlalchemy commands within the flask approutes, or you can use pdb.

- For adding tags for logs, view (this answer forum)[https://intellipaat.com/community/4395/recommended-sql-database-design-for-tags-or-tagging] for proper design.

- SQLite3 disables support for foreign keys by default. You can enable foreign keys via the sqlite3 cli or within sqlalchemy.