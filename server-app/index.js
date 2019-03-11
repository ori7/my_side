const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const fs = require('fs');

const PORT = 8888;

const app = express();
app.use(cors());
app.use(express.json());

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function (socket) {
    
    console.log('a user connected');

    socket.on('message', function (msg) {
        console.log('message: ' + msg);
        sqlOperation.getReceipes(function(err, res) {
            if (err) {
                throw error;
            }
            else {
                socket.emit('message', res); 
            }
        })
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

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
                });
            });
        };
    });
});

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

function writeToFile(user, callback) {
    const line = 'Name: ' + user.name + ', Email: ' + user.email + ', Phone: ' + user.phone + '.';
    fs.appendFile("usersList.txt", line + "\n", function (err) {
        if (err) {
            callback(err);
        };
        callback(null, 'written');
    });
};

app.get('/recipes', function (req, res) {
    sqlOperation.getReceipes(function(error, result) {
        if (error) {
            throw error;
        }
        else {
            res.send(result);
        }
    })
});

const sqlOperation = {
    getReceipes: function(callback) {
        const query = 'SELECT `id`, `name`, `instructions` FROM `recipe`';
        connection(query, function (error, results) {
            if (error)
                callback(error);
            else
                callback(null, results);
        });
    }
}

app.post('/recipes', function (req, res) {
    const query = 'INSERT INTO `recipe`(`name`, `instructions`) VALUES("' + req.body.name + '","' + req.body.instructions + '")';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe aded successfully!'
        });
    });
});

app.put('/recipes/:id', function (req, res) {
    const query = 'UPDATE `recipe` SET `instructions`="' + req.body.instructions + '", `name`="' + req.body.name + '" WHERE `id`="' + req.params.id + '"';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe updated successfully!'
        });
    });
});

app.delete('/recipes/:id', function (req, res) {
    const query = 'DELETE FROM `recipe` WHERE `id` ="' + req.params.id + '"';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe delited!'
        });
    });
});

http.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});