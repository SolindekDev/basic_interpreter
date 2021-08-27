const tokens = require('./tokens')
const numbers = require('./numbers')
const types = require('./types.js')

module.exports = (tokens) => {
    if (!tokens) throw new TypeError("Tokens not given!")

    if (tokens[0].type == types.number) {
        for (let i = 0; i < tokens.length; i++) {
            console.log(i, tokens.length, tokens[i])
        }
    }
}
