"use strict";

let myName = "Grégoire";

console.log(`Hello World! Mon nom est ${myName}.`);

function sumBetweenValues(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}
let sum5and10 = sumBetweenValues(5, 10);

console.log(`La somme de tous les nombres entre 5 et 10 est ${sum5and10}.`);

let sumResultDiv = document.getElementById("sum5And10");
sumResultDiv.innerText = `45`;
sumResultDiv.classList.add("red");
