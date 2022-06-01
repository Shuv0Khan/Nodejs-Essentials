const fs = require("fs");

const readStream = fs.createReadStream("questionsWithModule.js", "utf-8");

console.log("Type something....");

let text = "";

readStream.on("data", data=>{
    console.log(`I read ${data.length - 1} characters of text.`);
    text += data;
});

readStream.once("data", data=>{
    console.log(data);
});

readStream.on("end", ()=>{
    console.log(text);
});