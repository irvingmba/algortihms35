function checkParenthesis(text){
    if(typeof text !== "string") throw new TypeError("You must input a string");
    let opened = 0, unbalanced = 0;
    for(const char of text){
        if(char === "(") ++opened;
        if(char === ")" && opened) --opened;
        else if(char === ")" && !opened) ++unbalanced;
    }
    return unbalanced + opened;
}

module.exports = checkParenthesis;