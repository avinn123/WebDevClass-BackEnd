import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

let posts = [];
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index.ejs");
});

app.get("/delete",(req,res) => {
    res.render("postDelete.ejs");
});

app.post("/deleted",(req,res) => {
    
    let postToDelete = req.body.postToDelete;
    posts.splice((parseInt(postToDelete) - 1),1);
    // alert("Post Deleted!");
    res.render("index.ejs",{blog:posts,message:"Post Deleted!"});
    
});


app.get("/deleted/:postToDelete",(req,res) => {
    
    let postToDelete = req.params.postToDelete;
    posts.splice((parseInt(postToDelete) ),1);
    // alert("Post Deleted!");
    res.render("index.ejs",{blog:posts,message:"Post Deleted!"});
    
});

app.get("/about",(req,res) => {
    res.sendFile(__dirname+'/public/about.html')
});

app.post("/submit",(req,res) => {
    let timeNow=new Date().toLocaleDateString();

    posts.push({content:req.body.text,signature:{name:req.body.name,email:req.body.email,time:timeNow}});
    res.render("index.ejs",{blog:posts})
})

app.listen(PORT,(req,res) => {
    console.log("Server started on port number "+PORT);
});