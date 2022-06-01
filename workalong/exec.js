const cp = require("child_process");

cp.exec("dir", (err, data, stderr) => {
    if(err) {
        console.log(`original error: ${stderr}`);
        throw err;
    }
    console.log(data);
});

const questionApp = cp.spawn("node", ["questionsImproved.js"]);

questionApp.stdin.write("Shuvo\n");
questionApp.stdin.write("MI\n");
questionApp.stdin.write("Dumb\n");

questionApp.stdout.on("data", data => {
    console.log(`from Q app: ${data}`);
});

questionApp.on("close", () => {
    console.log("Q app exited.");
});