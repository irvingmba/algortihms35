function getUniqueWord(str){
    if(typeof str !== "string") throw new TypeError("Input a proper string");
    const letters = new Set();
    for(const letter of str){
        letters.add(letter);
    };
    const itLetters = letters.values();
    let unique = "";
    for(const letter of itLetters){
        unique += letter;
    }
    return unique;
}

module.exports = getUniqueWord;