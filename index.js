var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();
var cors = require('cors');

app.use(authChecker);
function authChecker(req, res, next) {
    if(req.headers["api-key"] !== 1234) {
      next();
    }

}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});
