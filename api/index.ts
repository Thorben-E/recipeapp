import express from 'express';
const router = express.Router();

const port = 8000;

const app = express();

app.get('/', (req, res) => {
  res.send('hello from express + ts');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
