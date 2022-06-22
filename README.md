---- Windows ----
Post :
curl -X POST -H "content-type:application/json" -d `@json.txt http://localhost:5000/falls

Get:
curl -X GET http://localhost:5000/falls/
curl -X GET http://localhost:5000/falls/delete
curl -X GET http://localhost:5000/falls/4b103f89403f841059524fd1

---- Linux ---
Post :
curl -X POST -H "content-type:application/json" -d '{"name":"Dudhsagar Falls","place":"Goa"}' http://localhost:5000/falls

Get:
curl -X GET http://localhost:5000/falls/
curl -X GET http://localhost:5000/falls/delete
curl -X GET http://localhost:5000/falls/4b103f89403f841059524fd1
