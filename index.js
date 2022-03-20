const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const request = require('request');
const config = require('./config.js');


app.get('/:id', (req, res) => {
    res.send('Get Citizen!')
    request(`https://govcarpetaapp.mybluemix.net/apis/validateCitizen/${req.params.id}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });
})


app.get('/:id/:urlDocument/:documentTitle', (req, res) => {
    res.send('Result!')
    request(`https://govcarpetaapp.mybluemix.net/apis/authenticateDocument/${req.params.id}/${req.params.urlDocument}/${req.params.documentTitle}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });

})


app.post('/registerCitizen', (req, res) => {
    options = {
        url: 'https://govcarpetaapp.mybluemix.net/apis/registerCitizen',
        json: true,
        body: req.body
    }

    request.post(options, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });
    res.send('Response!')
})

app.listen(config.PORT, () => console.log('Server started'));