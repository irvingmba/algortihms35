function maxArrayValue(arr=[]){
    if(!Array.isArray(arr)) throw new TypeError("Must provide an array");
    return arr.reduce((prev,val)=>prev > val ? prev : val);
};

module.exports = maxArrayValue;