const emailCheck = require('email-check')
var appRouter = function (app) {
  app.post("/", function(req, res) {
    console.log(req.body.email)
    emailCheck(req.body.email, {
      from: 'he@corylogan.com',
      host: 'mx.zoho.com',
      timeout: 4000
    }).then(function (res) {
      res.status(200).send({valid: res});
    }).catch(function (err) {
      res.status(200).send({valid: false});
    });
  });
}

module.exports = appRouter;


// emailCheck('he@corylogan.com', {
//   from: 'he@corylogan.com',
//   host: 'mx.zoho.com',
//   timeout: 5000
// }).then(function (res) {
//   console.log(res);
// }).catch(function (err) {
//   console.error('looks invalid');
// });
