// Main entry of interpreter

const readline = require('readline')
const lexer = require('./lexer.js');
const parser = require('./parser.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function whileVariable() {
    rl.question('/> ', (value) => {
        const lexerRes = lexer(value)
        if (lexerRes.error) {
            console.log(lexerRes.error)
        } else if (lexerRes.tokens) {
            console.log(lexerRes)
            parser(lexerRes.tokens)
        }
        whileVariable()
    });
}

whileVariable()
