const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const fs = require('fs');

const PORT = 8888;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', function (req, res) {

    const query = 'INSERT INTO `contact`(`name`, `email`, `phone`) VALUES("' + req.body.name + '","' + req.body.email + '","' + req.body.phone + '")';
    connection(query, function (error, results) {
        if (error) throw error;
        else {
            writeToFile(req.body);
            res.end('ok');
        }
    })
});

function writeToFile(user) {
    const line = 'Name: ' + user.name + ', Email: ' + user.email + ', Phone: ' + user.phone + '.';
    fs.appendFile("usersList.txt", line + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

function connection(query, callback) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "users"
    });
    connection.connect();
    connection.query(query, callback);
    connection.end();
}

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});