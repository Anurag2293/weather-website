import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setting handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
    // console.log('Get request on /about')
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'Help',
        name : 'Anurag Dhote',
        helpText : 'You can contact us for any queries.'
    })
})

app.get('/weather', (req, res) => {
    
    if (!req.query.address) {
        return res.send({
            error : 'You must provide an address'
        })
    }

    res.send({
        address : req.query.address
    })
})

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error : 'You must provide a search term'
        })
    }


    console.log(req.query.search)
    res.send({
        products : []
    })
})

app.get('/help/*', (req, res) => {
    // res.send('Help page not found')
    res.render('404', {
        errorMessage : 'Help article not found',
        name : 'Anurag Dhote',
        title : '404'
    })
})

app.get('*', (req, res) => {
    // res.send('My 404 page')
    res.render('404', {
        errorMessage : 'Page not found',
        name : 'Anurag Dhote',
        title : '404'
    })
})

app.listen(3000, () => {
    console.log('App is running on PORT 3000')
})