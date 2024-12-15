const express = require('express');
const app = express();
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', function (req, res) {
	var user = req.body.username;
	var pass = req.body.password;

    if (user === 'guest' && pass === '1234') {
        res.end('Welcome guest');
    }
    else {
        res.end('Invalid credentials');
    }
});

app.listen(8080);
