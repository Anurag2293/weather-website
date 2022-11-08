import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
console.log(publicDirectoryPath)

// Customizing the server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name : 'Anurag'
    },
    {
        name : 'Aman'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        city : 'Philadelphia',
        latitude : 21.1,
        longitude : -120
    })
})

app.listen(3000, () => {
    console.log('App is running on PORT 3000')
})