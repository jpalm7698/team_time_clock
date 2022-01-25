# team-time-clock

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# TODO:
- Replace vue-chart.js charts with chart.js implementation. See [this comment in vue-chart.js issue #695](https://github.com/apertureless/vue-chartjs/issues/695#issuecomment-910257404).
    - vue-chart-3 may be used instead.
- Add log entry function in Vue.
    - ✔️ Look into how to implement new log form.
    - ✔️ Implement Modal Dismissal if the log was successfully added.
    - Add validation logic
        - Require all fields to be completed
        - Verify start date/time is before end date/time
        - Include feedback messages (bootstrap-vue form-group)

- Implement Toast Messages for Success/Failure of getting, posting, putting, and removing log entries
- Learn and implement proper margin/padding for bootstrap elements

- Update DB Schema, Flask Middleware:
    - Address Worktime/Date Logs that span multiple dates
    - Add exception handling for invalid post data

- Replace Fetch API calls with Axios.
- Add endpoints to secret/local file (included in .gitignore)