const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}`)
});

app.use('/api/genre', require('./routes/genre'));
app.use('/api/adjective_who', require('./routes/adjective_who'));
app.use('/api/adjective_opponent', require('./routes/adjective_opponent'));
app.use('/api/how', require('./routes/how'));
app.use('/api/why', require('./routes/why'));
app.use('/api/who', require('./routes/who'));
app.use('/api/opponent', require('./routes/opponent'));
app.use('/api/where', require('./routes/where'))