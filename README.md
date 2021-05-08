# Vue-Auth

Creating a full website with Node and Vue

## Setup Node.js server
Set up a Node.js server that will handle authentication for us. For our Node.js server, we will use SQLite as the database of choice.

Run the following command to install SQLite driver:
```shell
$ npm install --save sqlite3
```

Because we are dealing with passwords, we need a way to hash passwords. We will use bcrypt to hash all our passwords. Run the following command to install it:
```shell
$ npm install --save bcrypt
```

We also want a way to confirm the users we authenticate when they try to make a request to a secured part of our application. For this, we will use JWT. Run the following command to install the JWT package we will use:
```shell
$ npm install jsonwebtoken --save
```

To read json data, we will send to our server, we need body-parser. Run the following command to install it:
```shell
$ npm install --save body-parser
```
