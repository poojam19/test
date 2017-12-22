var restify = require("restify")
var Ajv = require('ajv');
var ajv = Ajv({allErrors: true});

var schema = {
  "properties": {
    "Name": { "type": "string" },
    "Number": { "type": "number"},
    "Address": { "type": "string" },
    "Email": { "type": "string" }
  }
};

var validate = ajv.compile(schema);

test({"Name": "John", "Number": 2123456, Address:"IL", Email:"abc@gmail.com"});
test({"Name": "Joe", "Number": 987654, Address: "NC", Email:"xyz@gmail.com"});

function test(data) {
  var valid = validate(data);
  if (valid) console.log('Valid!');
  else console.log('Invalid: ' + ajv.errorsText(validate.errors));
}

var server = restify.createServer();

server.listen(8080, function(){
    console.log("listening at:" , server.name , server.url);
}); 
