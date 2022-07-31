const express = require('express')
const { router } = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worlsdsdsdswddsdfsdfsdasd!')
})

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})