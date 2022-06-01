const fs = require("fs");

const writeStream = fs.createWriteStream("notes.txt", "utf-8");
const readStream = fs.createReadStream("ask.js", "utf-8");

readStream.on("data", data=>{
    writeStream.write(data);
});

readStream.pipe(writeStream);

setTimeout(()=>fs.unlinkSync("notes.txt"), 1000);