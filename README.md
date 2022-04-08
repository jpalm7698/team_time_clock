# Team Time Clock (Old)
This is the first (unfinished) implementation of Team Time Clock, a web application for logging work hours within a team.

## Why is this implementation being retired?
1. Repository is over a year old and uses older front-end frameworks and libraries
    - Bootstrap 4 (BootstrapVue), Vue.js 2, etc.
    - Vuex

1. Learning and development process
    - I'm considering learning new things by creating small projects, each focusing learning one thing at a time.
        - In contrast to a larger project where I'm learning everything at once.

## Things I've learned
- May be beneficial to learn new libraries and frameworks individually before incorporating them into larger projects.
    - This way you know the basic understanding, features, and gotchas of each and how they can be implemented in your projects.
- Feature branches are your friends.
- Design as much as you can before writing code. 
- Web development concepts including REST APIs, CRUD operations, and asynchronous programming.
- API building and testing using Postman.
- Build to learn, not the other way around.

## Planned Features
- Simple interface for adding, modifying, and removing one's time logs.
- Team members can view, modify, and delete all logs within a team.
- Sign-in using Email/Password, Facebook, Google, and other social providers.

## Completed Objectives
### Frontend
- Frontend SPA using Vue.js.
- Views for Homepage, Dashboard, and Logs list.
- Routes for each view using Vue Router.
- State management using Vuex.
- Add mock graphs using vue-chartjs.
- Create and read log entries from the server using Axios.

### Backend
- Restful API using Flask and Flask-RESTful.
- SQLite3 DB, managed using SQLAlchemy.
- SQLAlchemy DB Models for users and log Entries.
- Object serialization using Marshmallow (e.g., python datetime to JSON and vice versa).
- API building and testing using Postman.

## Project setup
### Frontend
```
cd [project root]
npm install
```
#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Backend
Create and use a python virtual environment if you wish.
```
cd [project root]/api
pip3 install -r requirements.txt
```

#### Run project in development mode
```
cd [project root]/api
export FLASK_APP='app'
export FLASK_ENV='development'
flask run
```

## TODO:
- Add log entry function in Vue.
    - ✔️ Look into how to implement new log form.
    - ✔️ Implement Modal Dismissal if the log was successfully added.
    - Add validation logic
        - Require all fields to be completed
        - Verify start date/time is before end date/time
        - Include feedback messages (bootstrap-vue form-group)

- Implement Toast Messages for Success/Failure of getting, posting, putting, and removing log entries
- Implement proper margin/padding for bootstrap elements

- Update DB Schema, Flask Middleware:
    - ✔️ Address Worktime/Date Logs that span multiple dates
    - Add exception handling for invalid post data