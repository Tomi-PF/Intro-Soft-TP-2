const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const port = 3000

const prisma = new PrismaClient()

app.use(cors())
app.use(express.json()) // Parse JSON

// Check si funciona
app.get('/', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

app.listen(port, () => {
  console.log(`Aterrizar app listening on port ${port}`)
})