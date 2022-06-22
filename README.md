# Water Fall API (Nodejs + express + MongoDB)

Heroku link: https://backend-waterfall-api.herokuapp.com/falls

## POSTMAN collections

### ---- Heroku ----
***Post :***
 - curl -X POST -H "content-type:application/json" -d '{"name":"Dudhsagar Falls","place":"Goa"}' https://backend-waterfall-api.herokuapp.com/falls

***Get :***
- curl -X GET https://backend-waterfall-api.herokuapp.com/falls/
- curl -X GET https://backend-waterfall-api.herokuapp.com/falls/delete
- curl -X GET https://backend-waterfall-api.herokuapp.com/falls/delete/<id>
- curl -X GET https://backend-waterfall-api.herokuapp.com/falls/<id>

### ---- Windows ----
***Post :***
- curl -X POST -H "content-type:application/json" -d `@json.txt http://localhost:5000/falls

***Get :***
- curl -X GET http://localhost:5000/falls/
- curl -X GET http://localhost:5000/falls/delete
- curl -X GET http://localhost:5000/falls/delete/<id>
- curl -X GET http://localhost:5000/falls/<id>

### ---- Linux ---
***Post :***
- curl -X POST -H "content-type:application/json" -d '{"name":"Dudhsagar Falls","place":"Goa"}' http://localhost:5000/falls

***Get :***
- curl -X GET http://localhost:5000/falls/
- curl -X GET http://localhost:5000/falls/delete
- curl -X GET http://localhost:5000/falls/delete/<id>
- curl -X GET http://localhost:5000/falls/<id>
