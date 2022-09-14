import fs from 'fs';

let data = "This is a test data into a file";

/*fs.writeFile("apple.txt",data,err => {
    if(err){
        console.error(err);
    }else{
        console.log("File saved");

        fs.readFile("apple.txt",(err,data) => {
            if(err){
                console.error(err);
            }else{
                console.log(new String(data));
            }
        })
    }
})*/

fs.writeFileSync("xyz.txt",data);
let dataRead = fs.readFileSync("xyz.txt")
console.log(new String(dataRead));