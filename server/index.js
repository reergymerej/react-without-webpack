const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, '../static')))

app.get('*', (req, res) => {
  console.warn(`${req.path} not found`)
  res.status(404).end()
})

app.listen(port, () => {
  console.log(`ready at http://localhost:${port}`)
})
