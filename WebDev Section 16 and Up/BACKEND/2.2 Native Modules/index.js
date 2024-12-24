const fs = require("fs");
// fs.writeFile("message.txt","Hello from NODE-JS",(err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 
let dataToAppend = '\nHi from Arvind\nHi from Avira'
fs.appendFile('message.txt',dataToAppend,'utf-8', (err) => {
    if (err) throw err;
    console.log(`THe text " ${dataToAppend}" was appended to file`);
  }); 

  fs.readFile('message.txt','utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 