import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import {PASSWORD} from './password.js';
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true }));

function erroLogging(req,res,next){
    var dataToAppend = '';
    if (req.body.password === PASSWORD){
        dataToAppend = `${(new Date()).toLocaleString()}: Login Attempt Successful!!\n`;
    }
    else{
        dataToAppend = `${(new Date()).toLocaleString()}: Login Attempt UnSuccessful!!\n`;
    }
   
    fs.appendFile('ErrorLog.txt',dataToAppend,'utf-8', (err) => {
        if (err) throw err;
        console.log(`THe log was appended to file`);
      }); 
      next();
}
// app.use(erroLogging);
app.get("/", (req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",erroLogging,(req,res) => {
    console.log(req.body);
    if (req.body.password === PASSWORD){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/error.html");
    }
    
})

app.get("/goback", (req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});
app.listen(port,() => {
    console.log(`Server started at port# ${port}`);
});