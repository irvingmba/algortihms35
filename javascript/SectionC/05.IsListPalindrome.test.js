const isListPalindrome = require("./05.IsListPalindrome");

class LinkedElem {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
};

describe("Function to check if a list is a palindrome", () => {
    test("If function does not get objects with next and value props, it will throw", () => {
        expect(()=>isListPalindrome()).toThrow();
    })

    test("When it gets a list with one element, returns true", () => {
        const list = new LinkedElem(1);
        expect(isListPalindrome(list)).toBeTruthy();
    })
    
    test("Even palindrome list, returns true", () => {
        const list = new LinkedElem(2, new LinkedElem(0, new LinkedElem(0, new LinkedElem(2))));
        expect(isListPalindrome(list)).toBeTruthy();
    });

    test("Odd palindrome list, returns true", () => {
        const list = new LinkedElem(2, new LinkedElem(0, new LinkedElem(5, new LinkedElem(0, new LinkedElem(2)))));
        expect(isListPalindrome(list)).toBeTruthy();
    });

    test("Even not palindrome list, returns false", () => {
        const list = new LinkedElem(5, new LinkedElem(0, new LinkedElem(0, new LinkedElem(2))));
        expect(isListPalindrome(list)).toBeFalsy();
    });

    test("Odd not palindrome list, returns false", () => {
        const list = new LinkedElem(2, new LinkedElem(7, new LinkedElem(5, new LinkedElem(0, new LinkedElem(2)))));
        expect(isListPalindrome(list)).toBeFalsy();
    });
});