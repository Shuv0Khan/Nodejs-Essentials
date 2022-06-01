const fs = require("fs");

fs.readdir("./lib", (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files);
});

fs.readFile("./app.js", "utf-8", (err, text) => {
    if (err) {
        console.log(`An error occured: ${err}`);
        process.exit();
    }
    console.log(text);
});

const text = `
# This is a new file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("notes.md", text.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("File saved");
});

if (!fs.existsSync("dummy")) {

    fs.mkdir("dummy", err => {
        if (err) {
            throw err;
        }
        console.log("Directory Created");
    });

}

fs.appendFile("notes.md", "\nnew text\n", err => {
    if (err) {
        throw err;
    }
});

fs.rename("notes.md", "./dummy/Notes.md", err=>{
    if(err) {
        throw err;
    }
});

setTimeout(()=>{
    fs.unlinkSync("./dummy/Notes.md");

    fs.rmdir("./dummy", err => {
        if(err) {
            throw err;
        }
    });
    
}, 4000);

