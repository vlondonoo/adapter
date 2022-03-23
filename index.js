const express = require("express");
var cors = require("cors");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
    })
);

const config = require("./config.js");

app.get("/:id", cors(), (req, res) => {
    request.get({
            url: `https://govcarpetaapp.mybluemix.net/apis/validateCitizen/${req.params.id}`,
            json: true,
        },
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error("Error:", err);
            }
            console.log("Server responded with:", body);
            res.send({ data: body });
        }
    );
});

app.get("/:id/:urlDocument/:documentTitle", (req, res) => {
    request.get({
            url: `https://govcarpetaapp.mybluemix.net/apis/authenticateDocument/${req.params.id}/${req.params.urlDocument}/${req.params.documentTitle}`,
            json: true,
        },
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error("Error:", err);
            }
            console.log("Server responded with:", body);
            res.send({ data: body });
        }
    );
});

app.post("/registerCitizen", (req, res) => {
    request.post({
            url: "https://govcarpetaapp.mybluemix.net/apis/registerCitizen",
            json: true,
            body: req.body,
        },
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error("Error:", err);
            }
            console.log("Server responded with:", body);
            res.send({ data: body });
        }
    );
});

app.listen(config.PORT, () => console.log("Server started"));