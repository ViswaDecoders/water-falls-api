require("dotenv").config();
const Express = require("express"); // framework + middleware support
const BodyParser = require("body-parser"); // middleware
const MongoClient = require("mongodb").MongoClient; // database
const ObjectId = require("mongodb").ObjectId;
const CONNECTION_URL = process.env.MONGODB_URI;
const DATABASE_NAME = "india_waterfalls";

// ******************* Add a middleware to the rest API.  ********************
var app = Express();
// app.use(BodyParser.json());
// or
app.use(Express.json());
// app.use(BodyParser.urlencoded({ extended: true }));
// or
app.use(Express.urlencoded({ extended: true }));

// **************************************************************************

var database, collection;

// Inital API call start the server intail point
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collection = database.collection("falls");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});

// ************** Develop a Rest API to store Data on MongoDB. ****************

// API Endpoint to post data to named collection
app.post("/falls", (request, response) => {
  collection.insertOne(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.status(200).send(result.acknowledged);
    console.log("Document inserted successfully");
  });
});

// ******************************************************************************

// *************************Develop a Rest API to pull data ********************

// API Endpoint to retrive all data from named collection
app.get("/falls", (request, response) => {
  collection.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log("All collection data sent");
    response.status(200).send(result);
  });
});

// API Endpoint to retrive specific id data from named collection
app.get("/falls/:id", (request, response) => {
  collection.findOne(
    { _id: new ObjectId(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      console.log("Collection Id data sent");
      response.status(200).send(result);
    }
  );
});

// ************************************************************************

// *******************  Develop a Rest API to delete the data *************

// API Endpoint to delete the named collection
app.get("/falls/delete", (request, response) => {
  collection.drop((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    if (result) {
      console.log("Collection deleted");
      response.status(200).send(result);
    }
  });
});

// API Endpoint to delete specific id data from named collection
app.get("/falls/delete/:id", (request, response) => {
  collection.deleteOne(
    { _id: new ObjectId(request.params.id) },
    (error, result) => {
      if (error) {
        return response.status(500).send(error);
      }
      console.log(result);
      console.log("document deleted");
      response.status(200).send(result);
    }
  );
});

//********************************************************************
