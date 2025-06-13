var wkList = document.querySelectorAll('.white-key');
var bkList = document.querySelectorAll('.black-key');

// Array.from() is a built-in JavaScript method that creates a new array from
// When you use document.querySelectorAll(), it returns a NodeList (not a true array).
// Thus conversion is necessary
var comb = Array.from(wkList).concat(Array.from(bkList));

// number of sections to be made
var sections = 3;

var Education = [
    '[2017 - 2021] Allen National High School — Science, Technology, and Engineering (STE)',
    '[2021 - 2023] University of the East — Science, Technology, Engineering, and Mathematics (STEM)',
    '[2023 - Present] University of the Philippines — BS in Computer Science (BSCS)',
];

var Experience = [
    '[2017 - Present] Freelance — Video Editor',
    '[2022 - Present] Samuel Digital — Lead Acquisition Specialist',
    '[2023 - 2023] Samuel Digital — Social Media Manager',
];

var Interests = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
];

var aboutTitle = document.querySelector('#about-title');
var aboutList = document.querySelector('#about-list');

function educInfo() {
    var aboutTitle = document.querySelector('#about-title');
    aboutTitle.textContent = 'Education';

    if(aboutList != null) {
        aboutList.innerHTML = '';
    }

    for(let i = 0; i < Education.length; i++) {
        var newList = document.createElement('li');
        var textNode = document.createTextNode(Education[i]);
        newList.appendChild(textNode);
        
        aboutList.appendChild(newList);
    }
}

function expInfo() {
    aboutTitle.textContent = 'Experience';

    if(aboutList != null) {
        aboutList.innerHTML = '';
    }

    for(let i = 0; i < Experience.length; i++) {
        var newList = document.createElement('li');
        var textNode = document.createTextNode(Experience[i]);
        newList.appendChild(textNode);
        
        aboutList.appendChild(newList);
    }
}

function interestsInfo() {
    aboutTitle.textContent = 'Interests';

    if(aboutList != null) {
        aboutList.innerHTML = '';
    }

    for(let i = 0; i < Interests.length; i++) {
        var newList = document.createElement('li');
        var textNode = document.createTextNode(Interests[i]);
        newList.appendChild(textNode);
        
        aboutList.appendChild(newList);
    }
}

var functionForKeys = [educInfo, expInfo, interestsInfo];

// Selecting active keys
var listOfUsed = [];
for(let i = 0; i < sections; i++) {
    // Returns a random integer from 0 to 11
    do {
        var randNum = Math.floor(Math.random() * comb.length);
    } while(listOfUsed.includes(randNum));

    listOfUsed.push(randNum);

    comb[randNum].addEventListener('click', function(e) {
        this.setAttribute("style", "background: #c4643f;");

        // reset the color after a short delay
        setTimeout(() => {
        e.target.style.background = "";
        }, 1500);

    });

    comb[randNum].addEventListener('click', functionForKeys[i]);
}



