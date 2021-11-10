express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/angular-SCHOLARLY/static')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/angular-SCHOLARLY/index.html'))
})

// Listens to the specified route
// Try changing tryMe to something else
// You'll see route name doesn't matter as long as they are same in front & backend
app.get('/tryMe', (req, res, next) => {
    // an api route, change the message and re-run, you'll see the difference
    res.send({ message: 'successful request' })
})

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`)
})
