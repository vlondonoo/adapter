const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
}))

const request = require('request');
const config = require('./config.js');


app.get('/:id', cors(), (req, res) => {
    res.send({ "response": "12345" })
    return request(`https://govcarpetaapp.mybluemix.net/apis/validateCitizen/${req.params.id}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(body);
    });
})


app.get('/:id/:urlDocument/:documentTitle', (req, res) => {
    res.send({ "response": `${req.params.documentTitle}` })
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
    res.send({ "response": "resp" })
})

app.listen(config.PORT, () => console.log('Server started'));