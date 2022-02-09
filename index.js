const express = require('express')
const cors = require('cors');
const connectToMongo = require("./db");
connectToMongo();

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.use("/api/post",require("./routes/content"));

app.listen(port,()=>{
    console.log(`Server Started Successfully at http://localhost:${port}`)
});
