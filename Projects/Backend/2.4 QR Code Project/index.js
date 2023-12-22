/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const question = [{
    type: 'input',
    name: 'url',
    message: 'Write a url from a website.'
}];

inquirer.prompt(question).then((answer) => {
    
    const image = qr.image(answer.url);
    image.pipe(fs.createWriteStream('image.png'));

    fs.writeFile("url.txt", answer.url, (err) => {
        if (err) throw err;
        console.log('File saved');
    });
});



