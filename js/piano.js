var wkList = document.querySelectorAll('.white-key');
var bkList = document.querySelectorAll('.black-key');

// Array.from() is a built-in JavaScript method that creates a new array from
// When you use document.querySelectorAll(), it returns a NodeList (not a true array).
// Thus conversion is necessary
var comb = Array.from(wkList).concat(Array.from(bkList));

// number of sections to be made
var sections = 3;
var listOfUsed = [];

function education() {
    console.log('education');
}

function midEdu() {
    console.log('midEdu');
}

function notEducation() {
    console.log('notEduc');
}

var functionForKeys = [education, midEdu, notEducation];

for(let i = 0; i < sections; i++) {
    // Returns a random integer from 0 to 11
    do {
        var randNum = Math.floor(Math.random() * comb.length);
    } while(listOfUsed.includes(randNum));

    listOfUsed.push(randNum);

    comb[randNum].addEventListener('click', function() {
        this.setAttribute("style", "background: #c4643f;");
    });

    comb[randNum].addEventListener('click', functionForKeys[i]);
}



