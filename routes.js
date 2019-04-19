const emailCheck = require('email-check')

const checker = (email, count) => {
  console.log('Checking ' + email)
  return emailCheck(email, {
    from: 'he@corylogan.com',
    host: 'mx.zoho.com',
    timeout: 3000
  }).then(function (res) {
    if(count < 1 && res === false) {
      console.log('likely bad, retrying once');
      return checker(email, count + 1)
    } else {
      return res
    }
  }).catch(function (err) {
    console.log('this is surely bad, returned an error')
    return false
  });
}

// const email = 'he@corylogan.com'
// checker(email, 0).then((result) => {
//         console.log(email + ' ' + result)
// })
var appRouter = function (app) {
  app.post("/", function(req, res) {
    checker(req.body.email, 0)
    .then(function (res) {
      res.status(200).send({valid: res});
    }).catch(function (err) {
      res.status(200).send({valid: false});
    });
  });
}

module.exports = appRouter;
