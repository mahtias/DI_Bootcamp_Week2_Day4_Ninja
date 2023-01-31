/**
 * @author N'ZO LAGOU
 * @description 
 */

//1-Get a random number between 1 and 100.
let inputNumber;

do {
    inputNumber = prompt("Entrez un nombre entre 0 et 100")
} while (inputNumber == null || isNaN(inputNumber) || parseFloat(inputNumber) < 0 || parseFloat(inputNombre) > 100);

//2-Console.log all even numbers from 0 to the random number.
let convrtNumber = Math.round(inputNumber);
let sequenceNumber = "";
for (let i = 0; i <= inputNumber; i++) {
    (i == inputNumber) ? sequenceNumber += i : sequenceNumber += i+", ";
}

console.log(sequenceNumber);