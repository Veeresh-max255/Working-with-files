// const  fs = require('fs');


// console.log("Startinggg...")
// fs.writeFileSync("Vk.txt","Vijay is a good boy")    
// Write file sync creates the file synchroonously mean blocking code ...
// starting , file , ending file get scheduled thenn only the ending gets printed

// Whereas

// fs.writeFile("vk2.txt","Vijay is a good boy 2",()=>{
//     console.log("callback");
//     fs.readFile("vk2.txt",(error,data)=>{
//          //Readdfile gets two callback onne as error,data, data is in buffer...
//          // so  toostring...                                           
//    console.log(error,data.toString())
//     })
// });

// craeted the file synchronously, mean the starting exxecutes first 
// then file gets scheduled, withoout waiting ending printed
// starting, ending, callback...  PREFERABLE is write File with callback....
// console.log("Endingggg.......");


// fs append

// fs.appendFile("Vk.txt"," Vibha is good",(e,d)=>{
//     console.log(e,d);
// })

// Promises...

// type = module


// import fs from "fs/promises"
// let a = await fs.readFile("Vk.txt")
// console.log(a.toString())

// let b =  await fs.appendFile("Vk.txt"," Vibha is my Bestieee")
// console.log(b)


// Path....

