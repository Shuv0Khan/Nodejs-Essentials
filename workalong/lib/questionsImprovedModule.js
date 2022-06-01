const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (questions, done = f => f) => {
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