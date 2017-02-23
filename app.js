'use strict';

var seneca = require('seneca')();

seneca.add({ role: 'Service1' }, function (args, respond) {
    console.log("2");
  return respond(null, { allowed: true })
});


seneca.add({ role: 'Service1', cmd: 'Action1' }, function (args, callback) {
    console.log("1");
  this.prior(args, function (err, permission) {
      console.log("3");
      callback(null,permission)  
    });   
});

seneca.act({ role: 'Service1', cmd: 'Action1' },console.log);

seneca.listen({ host: 'localhost', port: 4000 });
module.exports.seneca = seneca;
