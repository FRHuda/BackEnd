const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

var app = express();
const port = 1997;

var url = bodyParser.urlencoded({extended : false});

app.use(cors());
app.use(url);
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const conn = mysql.createConnection({
    host : 'db4free.net',
    user : 'huda197',
    password : 'ecommercehuda2',
    database : 'ecommercehuda',
    port : 3306
})

// LOGIN EXPRESS

app.get('/login', (req, res) => {
    const { email, password } = req.query;
    var sql = `select * from akun where Email='${email}' && Pass='${password}'`;
    conn.query(sql, (err,results) => {
        if (err) throw err;
        res.send(results[0]);
    })
})

app.get('/keeplogin', (req, res) => {
    const { email } = req.query;
    var sql = `select * from akun where Email='${email}'`;
    conn.query(sql, (err,results) => {
        if (err) throw err;
        res.send(results[0]);
    })
})

app.post('/addakun', (req, res) => {
    const { Username, Email, Password} = req.body;
    var data = {
        Username : Username,
        Email : Email,
        Pass : Password,
        StatusId : 2
    };
    var sql = 'INSERT INTO akun SET ?';
    var sql1 = `select * from akun where Email='${Email}' && Pass='${Password}'`;
    conn.query(sql, data, (err, results) => {
        if(err) throw err;
        conn.query(sql1, (err, results1) => {
            if (err) throw err;
            res.send(results1);
        })
    })
})

// SHOP EXPRESS

app.get(`/shop/:category`, (req, res) => {
    var { category } = req.params;
    var sql = `SELECT p.* FROM product p join category c on p.CategoryId = c.Id WHERE c.Name='${category}'`;
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send('ERROR!');
        }
        console.log(category);
        res.send(results);
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));