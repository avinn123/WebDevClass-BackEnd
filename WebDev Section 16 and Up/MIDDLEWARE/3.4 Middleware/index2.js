import express from "express";
import morgan from "morgan";
import fs from "fs";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

var accessLogStream = fs.createWriteStream(__dirname+'access.log', { flags: 'a' })
 
// setup the logger
app.use(morgan())
app.use(morgan('short', { stream: accessLogStream }));
app.use(bodyParser.urlencoded({ extended:true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
});

app.post("/submit",(req,res) => {
  console.log(req.body);
  console.log("Your band name is : "+req.body.street+req.body.pet);
  res.send("Data Submitted successfully!!");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
