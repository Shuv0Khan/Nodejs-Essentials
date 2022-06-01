const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with nodejs?"
];

const collectAnswers = (questions, done) => {
    const answers = [];

    const [firstQ] = questions;

    const questionAnswered =  ans => {
        answers.push(ans);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            done(answers);
        }
    };

    rl.question(firstQ, questionAnswered);

    //done(answers);
}

collectAnswers(questions, answer => {
    console.log("Thank you for your answers. ");
    console.log(answer);
    process.exit();
})