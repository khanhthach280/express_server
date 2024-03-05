const express = require('express')
const app = express()

const PORT = 8080;

app.listen(
    PORT,
    () => console.log('http://localhost:' + PORT)
)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/khanh', (req, res) => {
    res.status(200).send({
        name : 'khanh',
        job : 'dev'
    })
})

app.listen(3000)