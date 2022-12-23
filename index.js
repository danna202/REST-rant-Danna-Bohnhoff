const express = require('express')
const app = express()
require('dotenv').config()

// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('*', (req, res) => {
    res.status(404).send('<H1>error404</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log (`listening on port ${PORT}`))
