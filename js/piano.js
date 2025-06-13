var wkList = document.querySelectorAll('.white-key');
var bkList = document.querySelectorAll('.black-key');

// Array.from() is a built-in JavaScript method that creates a new array from
// When you use document.querySelectorAll(), it returns a NodeList (not a true array).
// Thus conversion is necessary
var comb = Array.from(wkList).concat(Array.from(bkList));

console.log(comb);

// number of sections to be made
var sections = 3;
var listOfUsed = [];

for(let i = 0; i < sections; i++) {
    // Returns a random integer from 0 to 11
    do {
        var randNum = Math.floor(Math.random() * comb.length);
    } while(listOfUsed.includes(randNum));

    listOfUsed.push(randNum);

    comb[randNum].addEventListener('click', function() {
        this.setAttribute("style", "background: #c4643f;");
        console.log('hi');
    });
}
