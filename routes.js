const emailCheck = require('email-check')

const checker = (email, count) => {
  console.log('Checking ' + email)
  return emailCheck(email, {
    from: 'he@corylogan.com',
    host: 'mx.zoho.com',
    timeout: 3000
  }).then(function (res) {
    console.log('emailCheck resolved...')
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

var appRouter = function (app) {
  app.post("/", function(req, res) {
    checker(req.body.email, 0)
    .then(function (valid) {
      console.log(valid)
      res.status(200).send({valid});
    }).catch(function (err) {
      console.error(err)
      res.status(200).send({valid: false});
    });
  });
}

module.exports = appRouter;
