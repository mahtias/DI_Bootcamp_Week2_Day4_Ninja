/**
 * @author N'ZO LAGOU
 * @description Capitalized Letters
 */

/*1- Create a function that takes a string as an argument.
  2- Have the function return:
     The string but all letters in even indexes should be capitalized.
     The string but all letters in odd indexes should be capitalized.
 */
function capitalize(word) {
    let retune = [];
    let newValuePeer = "";
    let newValueOdd = "";
    for (let i = 0; i < word.length; i++) {
        if (i % 2 == 0) {
            newValuePeer += ("" + word.charAt(i)).toUpperCase().trim();
            newValueOdd += ("" + word.charAt(i)).toLowerCase().trim();
        } else {
            newValuePeer += ("" + word.charAt(i)).toLowerCase().trim();
            newValueOdd += ("" + word.charAt(i)).toUpperCase().trim();
        }
    }

    retune[0] = newValuePeer;
    retune[1] = newValueOdd;

    console.log(retune);
}

function main() {
    let input;
    do {
        input = prompt("enter a word please!");
    } while (input == null || !isNaN(input) || input.trim().search(" ") != -1);

    capitalize(input.toLowerCase());
}

main();