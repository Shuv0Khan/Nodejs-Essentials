const collectAnswers = require("./lib/questionsImprovedModule");

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with nodejs?"
];


collectAnswers(questions, answer => {
    console.log("Thank you for your answers. ");
    console.log(answer);
    process.exit();
})

collectAnswers(questions);