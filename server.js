//providing data

const express = require("express");
var mongoose=require("mongoose");
const cors = require("cors")
const app = express();
const routes=require("./routes");
const port = 4000;
var url = "mongodb://localhost:27017/budget";
var budgetModel=require('./models/budget_schema');
const budget = require("./data");
const router = express.Router()
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
        .then(()=>{
            app.use(express.json())
            app.use("/api",routes)
        })
        .catch((connectionError)=>{
          console.log(connectionError)
        })
app.use(cors());
app.get("/budget", (req, res) => {
  res.json(budget);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
