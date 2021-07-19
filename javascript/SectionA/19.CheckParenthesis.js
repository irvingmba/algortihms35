function checkParenthesis(text){
    if(typeof text !== "string") throw new TypeError("You must input a string");
    let count = 0;
    for(const char of text){
        if(char === "(") ++count;
        if(char === ")") --count;
    }
    return Math.abs(count);
}

module.exports = checkParenthesis;