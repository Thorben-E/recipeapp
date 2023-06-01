const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 8000;

const AuthRouter = require('./routers/Auth/AuthRouter')

app.use(express.json())
app.unsubscribe(bodyParser.json())

app.use('/', AuthRouter)

app.listen(port, () => {
  console.log(`running on ${port}`)
});