import express from "express";
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    // var randomNumber = Math.floor(Math.random() * 100) + 1;
    // res.send("Here's your random number :: "+randomNumber);
    res.send("<h1 style='color:red'>Hello</h1>");
    console.log("REQUEST:     "+req.rawHeaders);
});

app.get("/about", (req, res) =>{
    res.send("<h1 style='color:blue'>About Me!!</h1>");
    console.log("REQUEST:     "+req.rawHeaders);
});


app.get("/contact", (req, res) =>{
    res.sendFile("C:\\Users\\Test\\Documents\\WebDev Section 16 and Up\\BACKEND\\3.2 HTTP Requests\\contact.html");
    console.log("REQUEST:     "+req.rawHeaders);
});


app.listen(port, () =>{
console.log(`Server started at port : ${port}`);
});
