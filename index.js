import express from 'express';
const app = express()
const port = 8080

const currentDate = new Date().toLocaleDateString();

app.get('/', (req, res) => {
  res.send(`Hello World! Current date: ${currentDate}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
