// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");
var cors = require('cors');
var bodyParser = require("body-parser");
const path = require('path');

// Set up app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Root endpoint
app.get("/", (req, res) => {
    res.json({"message": "Ok"})
});

// Get all cakes
app.get("/api/cakes", (req, res) => {
    console.log("Getting all cakes...");
    let sql = "SELECT * FROM cake";
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

// Getting a cake by id
app.get("/api/cake/:id", (req, res) => {
    console.log(`Getting cake for id ${req.params.id}...`);
    let sql = "SELECT * FROM cake WHERE id = ?";
    let params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
});

// Delete a cake
app.delete("/api/cake/:id", (req, res) => {
    console.log(`Deleting cake for id ${req.params.id}...`);
    let sql = "DELETE FROM cake where id = ?";
    let params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
});

// Post a new Cake
app.post("/api/cake", (req, res) => {
    console.log('Creating a new cake...');
    let errors = [];
    if (!req.body.name) {
        errors.push("No name specified");
    }
    if (!req.body.comment) {
        errors.push("No comment specified");
    }
    if (!req.body.imageUrl) {
        errors.push("No imageUrl specified");
    }
    if (!req.body.yumFactor) {
        errors.push("No yumFactor specified");
    }
    if (errors.length) {
        res.status(400).json({"error": errors.join(",")});
        return;
    }

    let cake = {
        name: req.body.name.substring(0, 30),
        comment: req.body.comment.substring(0, 200),
        imageUrl: req.body.imageUrl,
        yumFactor: req.body.yumFactor
    };
    let sql = 'INSERT INTO cake (name, comment, imageUrl, yumFactor) VALUES (?,?,?,?)';
    let params = [cake.name, cake.comment, cake.imageUrl, cake.yumFactor];
    db.run(sql, params, function (err) {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": cake,
            "id": this.lastID
        })
    });
});


// Handles any request that don't match
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

// Server port
let HTTP_PORT = process.env.PORT || 5000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
