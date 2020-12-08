// Create express app
var express = require("express");
var app = express();
var db = require("./database.js");
var md5 = require("md5");
var cors = require('cors');
var bodyParser = require("body-parser");
const path = require('path');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


// Root endpoint
app.get("/", (req, res) => {
    res.json({"message": "Ok"})
});

// Insert here other API endpoints
app.get("/api/cakes", (req, res) => {
    console.log("Getting all cakes...");
    let sql = "select * from cake";
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

app.get("/api/cake/:id", (req, res) => {
    console.log(`Getting cake for id ${req.params.id}...`);
    var sql = "select * from cake where id = ?";
    var params = [req.params.id];
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
    if (errors.length) {
        res.status(400).json({"error": errors.join(",")});
        return;
    }

    let cake = {
        name: req.body.name,
        comment: req.body.comment,
        imageUrl: req.body.imageUrl,
        yumFactor: req.body.yumFactor
    };
    let sql = 'INSERT INTO cake (name, comment, imageUrl, yumFactor) VALUES (?,?,?,?)';
    let params = [cake.name, cake.comment, cake.imageUrl, cake.yumFactor];
    db.run(sql, params, function (err, result) {
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
})


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Server port
let HTTP_PORT = process.env.PORT || 5000;

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
