import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// setting handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather App',
        name : 'Anurag Dhote'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'About me',
        name : 'Anurag Dhote'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText : 'You can contact us for any queries.'
    })
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