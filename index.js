
// import connectToMongo from './db.js'; // Use 'import' for ES modules
// connectToMongo();
const express = require('express')
const connectToMongo = require('./db');
connectToMongo();

const app = express()
const port = 3000
app.use(express.json())
// available routes
app.use('/api/auth',require('./routes/auth') )
app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('express toh chal gya')
})

app.listen(port, () => {
  console.log(`hello Example app listening on port http://localhost:${port}`);
})