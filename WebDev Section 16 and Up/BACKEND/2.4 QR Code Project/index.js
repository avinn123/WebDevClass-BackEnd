/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
// import input from '@inquirer/input';

// const answer = await input({ message: 'Enter your name' });

// console.log(answer);

import inquirer from 'inquirer';
import * as fs from 'fs';
import * as qr from 'qr-image';


inquirer.prompt([
     {
       name: 'URL',
       message: 'Enter the URL for which you would like to create the URL for >> ',
       type: 'input'
       },
       {
        name: 'star',
        message: 'Enter the STAR!! ',
        type: 'input'
        }
    ])
      .then(function(answer){
       console.log(answer.URL);
       console.log(answer);
       fs.writeFile("url.txt",answer.URL,(err) => {
       if (err) throw err;
       console.log('The file has been saved!');
        });
        var qr_svg = qr.image(answer.URL, { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('url.png'));
         
        var svg_string = qr.imageSync(answer.URL, { type: 'png' });
        console.log(svg_string);
      });