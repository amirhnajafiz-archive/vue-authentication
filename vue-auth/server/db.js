/*
    Database class and configuration.

*/


"use strict";
const sqlite3 = require('sqlite3').verbose();

class Db {
    // DB class constructor
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }

    // Initialize the table
    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY,
                name text,
                email text UNIQUE,
                user_pass text,
                is_admin integer)`
        return this.db.run(sql);
    }

    // Query for getting a user by email
    selectByEmail(email, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE email = ?`,
            [email],function(err,row){
                callback(err,row)
            })
    }

    // Query for inserting the admin account
    insertAdmin(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)',
            user, (err) => {
                callback(err)
            })
    }

    // Query for getting all of the users
    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, function(err,rows){
            callback(err,rows)
        })
    }

    // Query for inserting a new user account
    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (name,email,user_pass) VALUES (?,?,?)',
            user, (err) => {
                callback(err)
            })
    }
}

module.exports = Db
