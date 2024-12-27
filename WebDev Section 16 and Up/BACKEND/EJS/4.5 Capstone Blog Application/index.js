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

app.get("/apiCall",(req,res) => {
    let activityArray = [];
    fetch('https://bored-api.appbrewery.com/filter?participants=2&type=social')
    .then(response => {
        
        return  response.json(); // Parse the response data as JSON
        
    })
    .then(data => {
        // Process the response data here
        
        data.forEach((item) => {
            
            activityArray.push(item.activity);
        })
        console.log(activityArray);
        if(activityArray.length > 0){
            res.render('apiRender.ejs',{data:activityArray})
           }
        else{
            res.send("Too many Requests Try Later!!");
        }

        
        
        // console.log(data); // Example: Logging the data to the console
    })

    .catch(error => {
        // Handle any errors here
        console.error(error); // Example: Logging the error to the console
    });
    console.log(activityArray);
    
     
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