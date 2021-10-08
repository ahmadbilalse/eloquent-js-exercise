// Need to be run on chapter 5 code runner
function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");
    return scripts.reduce((previous, current) => {
        if (current.count > previous.count) return current;
        else return previous;
    }).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl