const { Router } = require('express');
const router = new Router();
const _ = require('underscore');
const mysqlConnection = require("../database");

router.post('/', (req, res) => {
    const { name, description, url_image } = req.body;
    mysqlConnection.query("INSERT INTO locals VALUES(NULL,?,?,?)", [name, description, url_image], (err, row, field) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ "status": "locals inserted" });
        }
    })

});

router.post('/client', (req, res) => {
    const { username, email, password, names, lastnames, phone, photo, url_identification, region, birthday } = req.body;
    mysqlConnection.query("INSERT INTO clients VALUES(NULL,?,?,?)", [url_identification, region, birthday], (err, row, field) => {
        if (err) {
            console.log(err);
        } else {
            mysqlConnection.query("INSERT INTO users VALUES(NULL,?,?,?,?,?,NOW(),?,?,'client',?,NULL)", [username, email, password, names, lastnames, phone, photo, row.insertId], (err, row, field) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json({ "status": "clients inserted" });
                }
            });
        }
    });
});

router.post('/', function (req, res) {
    const { url_identification, url_licence, balance, total_orders } = req.body;
    mysqlConnection.query("INSERT INTO deliveries VALUES (NULL,?,?,?,?)", [url_identification, url_licence, balance, total_orders], (err, row, field) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ "status": "Insetada" });
        }
    });
});

router.delete('/delivery/:idsellers', function (req, res) {
    const { idsellers } = req.params;
    console.log("Test:", idsellers);
    mysqlConnection.query("DELETE  FROM deliveries WHERE idsellers=?", [idsellers], (err, row, field) => {
        if (err) {
            console.log(err);
        } else {
            res.json({ "status": "Deliveries Eliminado" });
        }
    });
});


module.exports = router;
