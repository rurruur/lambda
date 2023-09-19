import express from 'express';

const app = express();
const PORT = 8080;

app.get('/', (_, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
