
/*
Create an input type text that takes/shows only letters. 
(ie. numbers and special characters won’t be accepted)
*/

let inputText = document.getElementById("inputText");
let regex = /[a-zA-Z]/;
let test = "";
inputText.addEventListener("input", (ev) => {
    //console.log(test.replace("444"));
    let inputTextAll = ev.target.value;
    letNewValue = '' + inputTextAll.charAt(inputTextAll.length - 1);
    console.log(letNewValue);
    if (letNewValue.search(regex) == -1) {
        inputTextAll = inputTextAll.replace(letNewValue, '');
        ev.target.value = inputTextAll;
    }
});