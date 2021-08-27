const tokens = require('./tokens')
const numbers = require('./numbers')
const types = require('./types.js')

module.exports = (input) => {
    const _inputSplited = input.split('')
    const _tokens = []
    const results = {}

    _inputSplited.forEach((v) => {
        if (v in numbers) {
            return _tokens.push({ type: types.number, value: v })
            // console.log(make_number(_tokens, v))
        } else if (v == tokens._ADD) {
            return _tokens.push({ type: types.operator, value: tokens._ADD })
        } else if (v == tokens._SUB) {
            return _tokens.push({ type: types.operator, value: tokens._SUB })
        } else if (v == tokens._DIV) {
            return _tokens.push({ type: types.operator, value: tokens._DIV })
        } else if (v == tokens._SUB) {
            return _tokens.push({ type: types.operator, value: tokens._SUB })
        } else if (v != " ") {
            results.error = `Illegal character '${v}'`
        }
    });

    results.tokens = _tokens

    return results
}
