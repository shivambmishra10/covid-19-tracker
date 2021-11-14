const express = require('express')
const app = express()
const port =process.env.PORT || 4000
const api = require('novelcovid');
const exhbs=require('express-handlebars')
app.set('view engine','hbs')
app.engine('hbs',exhbs(
    {
        extname:'hbs',
        defaultView:'home',
        layoutsDir:__dirname+'/views/layouts/'
    }
))
// api.countries().then((countries)=>
//     {console.log(countries)})
app.get('/', (req, res) =>{
    api.countries()
    .then((countries)=>
    {
        res.render('home.hbs',{info:countries})
    })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))