/*
    Our node server, using SQLite and Express server and router.

    Express server :
        @visit https://github.com/expressjs/express
    SQLite :
        @visit https://github.com/mapbox/node-sqlite3
    Bcrypt :
        @visit https://github.com/kelektiv/node.bcrypt.js
    CORS :
        @visit https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
*/


// Modules importing
"use strict";
import express, { Router } from 'express'; // Express server and server router
import DB from './db'; // SQLite database
import { secret } from './config';
import { hashSync, compareSync } from 'bcrypt'; // Using the Bcrypt to encode the passwords
import { sign } from 'jsonwebtoken';
import { urlencoded, json } from 'body-parser';


// Initializations
const db = new DB("sqlitedb")
const app = express();
const router = Router();

router.use(urlencoded({ extended: false }));
router.use(json());


// CORS middleware
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)


/*
    Routers
        1. Register
        2. Admin Register
        3. Login
*/

// Register router to create a new account for our user
router.post('/register', function (req, res) {
    db.insert([
        req.body.name,
        req.body.email,
        hashSync(req.body.password, 8)
    ],
        function (err) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            db.selectByEmail(req.body.email, (err, user) => {
                if (err) return res.status(500).send("There was a problem getting user")
                let token = sign({ id: user.id }, secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({ auth: true, token: token, user: user });
            });
        });
});

// Admin registering router 
router.post('/register-admin', function (req, res) {
    db.insertAdmin([
        req.body.name,
        req.body.email,
        hashSync(req.body.password, 8),
        1
    ],
        function (err) {
            if (err) return res.status(500).send("There was a problem registering the user.")
            db.selectByEmail(req.body.email, (err, user) => {
                if (err) return res.status(500).send("There was a problem getting user")
                let token = sign({ id: user.id }, secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.status(200).send({ auth: true, token: token, user: user });
            });
        });
});

// User login router
router.post('/login', (req, res) => {
    db.selectByEmail(req.body.email, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = compareSync(req.body.password, user.user_pass);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        let token = sign({ id: user.id }, secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token, user: user });
    });
})

app.use(router)


// Now we start the server at port 3000
let port = process.env.PORT || 3000;

let server = app.listen(port, function() {
    console.log('Express server listening on port ' + port)
});