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
        if (error) {
            throw error;
        }
        else {
            writeToFile(req.body, function (err, d) {
                if (err) {
                    res.status(500).send();
                }
                res.json({
                    status: 'The user entered successfully!'
                })
            });

        }
    })
});

function writeToFile(user, callback) {
    const line = 'Name: ' + user.name + ', Email: ' + user.email + ', Phone: ' + user.phone + '.';
    fs.appendFile("usersList.txt", line + "\n", function (err) {
        if (err) {
            callback(err);
        }
        callback(null, 'written');
    });
};

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
};

app.get('/recipes', function (req, res) {
    const query = 'SELECT `name`, `instructions` FROM `recipe`';
    connection(query, function (error, results) {
        if (error)
            throw error;
        else
            res.send(results);
    });
});

app.post('/recipes', function (req, res) {
    const query = 'INSERT INTO `recipe`(`name`, `instructions`) VALUES("' + req.body.name + '","' + req.body.instruction + '")'; console.log(query);
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe aded successfully!'
        })
    });
});

app.put('/recipes/:name', function (req, res) {
    const query = 'UPDATE `recipe` SET `instructions`="' + req.body.instructions + '" WHERE `name`="' + req.params.name + '"';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe updated successfully!'
        })
    });
});

app.delete('/recipes/:name', function (req, res) {
    const query = 'DELETE FROM `recipe` WHERE `name` ="' + req.params.name + '"';
    connection(query, function (error, results) {
        if (error)
            throw error;
        else
            res.json({
                status: 'The recipe delited!'
            })
    });
})

app.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});