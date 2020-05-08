var express = require('express');
var cors = require('cors');
// for sending html file
var path = require('path');
let ejs = require('ejs');
var app = express();
app.use(cors());
let bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true }));
// for reading JSON
app.use(bodyParser.json());

var mysql = require('mysql');

/** Information required to MysQL connection.*/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "business",
    multipleStatements: true
});

/** Connects to MySQL. */
con.connect(function(err){
    if(err) throw err;
    console.log('Connected to MySQL!');
});

/** Redirect to index.html page.*/
app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

/**Send all companies to the client in json format.*/
app.get('/companies', function (req, res) {
    var alteredResult;
    var string;
    getResult(function(err, result) {
        if (err) {console.log("Database error!"); throw err;
        } else {
            string = JSON.stringify(result);
            alteredResult = '{"numOfRows":' +result.length+', "rows": '+string+'}';
            console.log("Altered result: " + alteredResult);
            res.send(alteredResult);
        }
    });
});

/**
 * function getResult
 * Send a request.
 * @param {getResult} callback - The callback that handles the response from database.
 * Selects all companies from database.
 * @returns callback{null, string}
 */
var getResult = function(callback) {
        var sql = "SELECT * from companies";
        con.query(sql, function (err, result) {
            if (err) return callback(err);
            console.log(result); // näkyykö selaimessa?
            return callback(null, result);
        });
};

/**Sends next free ID to the client when creating new company.*/
app.get('/create', function (req, res) {
    var alteredResult2;
    var string2;
    getMaxid(function(err, result) {
        if (err) {console.log("Database error!"); throw err;
        } else {
            console.log("Result: " + result);
            string2 = JSON.stringify(result);
            alteredResult2 = '{"numOfRows":' +result.length+', "rows": '+string2+'}';
            console.log("Altered result: " + alteredResult2);
            res.send(alteredResult2);
        }
    });
});

/**
 * @function getMaxid
 * Send a request.
 * @param {getMaxid} callback - The callback that handles the response from database.
 * Selects MAX id from database.
 * @returns callback{null, string}
 */
var getMaxid = function(callback) {
    var sql = "SELECT MAX(id)+1 AS id FROM companies";
    con.query(sql, function (err, result) {
        if (err) return callback(err);
        console.log(result); // näkyykö selaimessa?
        return callback(null, result);
    });
};

/** Creates new company
 * Gets all data required from the client and puts it to database.*/
app.post('/create', function (req, res)  {
    console.log(req)
        var sql = "INSERT INTO companies(id, name, street, postcode, city, business_id, email, phone)"
            + " values(?,?,?,?,?,?,?,?)";
        con.query(sql, [req.body.id, req.body.name, req.body.street, req.body.postcode, req.body.city, req.body.business_id, req.body.email, req.body.phone],function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    res.json("")
});

/** Selects a company and gets company's data*/
app.get('/select/:id/:name/:street/:postcode/:city/:business_id/:email/:phone', function (req, res){
    var companyId = req.params.id;
    var companyName = req.params.name;
    var companyStreet = req.params.street;
    var companyCity = req.params.city;
    var companyPostcode = req.params.postcode;
    var companyBusinessid = req.params.business_id;
    var companyEmail = req.params.email;
    var companyPhone = req.params.phone;
    var alteredResult;
    var string;
    getUpdate(companyId, companyName, companyStreet, companyPostcode, companyCity, companyBusinessid, companyEmail, companyPhone,function(err, result) {
        if (err) {console.log("Database error!"); throw err;
        } else {
            res.render(__dirname + '/public/update.ejs', {id: companyId, name: companyName, street: companyStreet, postcode: companyPostcode, city: companyCity,  business_id: companyBusinessid, email: companyEmail, phone: companyPhone,});

    }});
});

/**
 * @function getUpdate
 * Send a request.
 * @param {getUpdate} callback - The callback that handles the response from database.
 * Selects all information about each company from database.
 * @param {string} companyId
 * @param {string} companyName
 * @param {string} companyStreet
 * @param {string} companyPostcode
 * @param {string} companyCity
 * @param {string} companyBusinessid
 * @param {string} companyEmail
 * @param {string} companyPhone
 * @returns callback{null, string}
 */
var getUpdate = function(companyId, companyName, companyStreet, companyPostcode, companyCity,  companyBusinessid, companyEmail, companyPhone, callback) {
    var sql = "SELECT * from companies WHERE id = ? AND name = ? AND street = ? AND postcode = ? AND city = ? AND business_id = ? AND email = ? AND phone = ?";
    con.query(sql, [companyId, companyName, companyStreet, companyPostcode, companyCity, companyBusinessid, companyEmail, companyPhone], function (err, result) {
        if (err) return callback(err);
        console.log(result); // näkyykö selaimessa?
        return callback(null, result);
    });
};

/** Updates company's information.
 * Gets from the client side new data and puts it to the database.*/
app.post('/update', function (req, res) {
        var sql = "UPDATE companies SET name = '"+req.body.name+"', street = '"+req.body.street+"', postcode = '"+req.body.postcode+"', city = '"+req.body.city+"', business_id = '"+req.body.business_id+"', email = '"+req.body.email+"', phone = '"+req.body.phone+"' WHERE id = '"+req.body.id+"'";
        con.query(sql, [req.body.id, req.body.name, req.body.street, req.body.postcode, req.body.city, req.body.business_id, req.body.email, req.body.phone], function (err, result) {
            if (err) throw err;
            //console.log("result:" + req.body.id, req.body.name, req.body.street, req.body.postcode, req.body.city, req.body.business_id, req.body.email, req.body.phone);
            res.redirect('/index');
        });
});


/**Delets company by ID */
app.get('/delete/:id', function (req, res){
        var sql = "DELETE FROM companies WHERE id = ?";
        con.query(sql, [req.params.id], function (err, result) {
            if (err) throw err;
            //console.log("Record has been deleted successfully!");
        });
   res.redirect('/index');
});

/**Listens server at port 8080. */
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});



