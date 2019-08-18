
var express = require('express');
var app = express();
const axios = require('axios');

app.get('/', function (req, res) {
    var myPath = encodeURI(`https://api.vk.com/method/database.getCities?country_id=1&q=${req.query.city}&pneed_all=0&count=5&v=5.101&access_token=bca95bceccbc09146cc39c8c9ef7eefd0f254f1de13a86bfc7c47808c104f519e73e1e8a3c97a4d81ce9b`);

    res.header("Access-Control-Allow-Origin", "*");

    axios.get(myPath)
    .then(response => {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
    
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});