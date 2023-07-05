const connectoMongo = require('./db')

connectoMongo();

const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;

//Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
})