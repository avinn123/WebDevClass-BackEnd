import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;
const app = express();

app.get("/", (req,res) => {
    var d = new Date();
    var day = d.getDay();

    var type = '';
    var advice = '';
    // var day = 6;


    if ((day == 6) || (day == 0) ){
        type = 'Weekend';
        advice = 'Time to have fun!!'
    }
    else{
        type = 'Weekday';
        advice = 'Time to work hard.'
    }
    res.render("index.ejs", {t:type, a:advice});
});

app.listen(PORT,(req,res) => {
    console.log(`Server running at port - ${PORT}`);
});