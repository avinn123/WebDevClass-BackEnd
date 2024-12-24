import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandNameHtml = '';
export { bandNameHtml };
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }));

function logger(req, res, next){

var dataToAppend = `Timestamp: ${new Date()} - Method: ${req.method} - URL: ${req.url} - RESPONSE: ${res.statusCode} - Street: ${req.body.street} - Pet: ${req.body.pet}\n`;
console.log(dataToAppend);
fs.appendFile('log.txt',dataToAppend,'utf-8', (err) => {
  if (err) throw err;
  console.log(`THe log was appended to file`);
}); 
next();
}


app.use(logger);



app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
  // console.log(res.body);
});

app.post("/submit",(req,res) => {
  
  // console.log(req.rawHeaders);
  // console.log("Your band name is : "+req.body.street+req.body.pet);
  
  bandNameHtml = `<h1>Your band name is :</h1><h2>${((req.body.street).charAt(0).toUpperCase()+(req.body.street).slice(1))+(req.body.pet).charAt(0).toUpperCase()+(req.body.pet).slice(1)}👅👅👅</h2>`
 
  res.send(bandNameHtml);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
