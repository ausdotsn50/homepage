// select <ul> with id #countryList
const countryList = document.querySelector("#countryList");

// create new list
const newList = document.createElement("li");
newList.innerHTML = ('<a class="dropdown-item" href="#">Default List Item</a>'); // for escaping purposes

// append new list to 
countryList.appendChild(newList);
