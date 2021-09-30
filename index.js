const express = require('express')
const app = express()

const port = 5000
const router = require('./src/routes')

app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`)
})