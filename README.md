# Time-Tracker-Server App

## ARCHITECTURE

[deployed online on heroku](https://time-tracker-tekab.herokuapp.com/)

- https://time-tracker-tekab.herokuapp.com/

### API contains two endpoints:

- verb: Get
- Endpoint: '/'
- Response: 'Hello World!'
- this router for test

---

- verb: Get
- Endpoint: /laps
- Response: Returns an array of all laps

---

- verb: Post
- Endpoint: /laps
- Expected request body:
  id: number,
  DateStart: string,
  DateEnd: string,
  FormattedTime: string,
  seconds: number,
- Response: 'post successfully'

---

- verb: Delete
- Endpoint: /laps/delete
- Response: 'remove all laps successfully'
