const db = require("mongoose");


const connectionString = "mongodb://acad:3O1F1LCy0muuVQM4IrtIXsb1cYF3XaCHC5VKyZLwWXwINaDaULrYZWVoIhnjUm3sjDjAXQeVUNUa2OnDObaoxw==@acad.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@acad@"; 

const connectToMongo = async()=>{
    await db.connect(connectionString)
    console.log("Connected to Mongo Successfully");
};

module.exports = connectToMongo