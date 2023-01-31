/**
 *  @author N'ZO LAGOU
 * @description DI-Bootcamp Biggest Number
 */

/*
1- Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note : This function should work with any array;
*/
function biggestNumberInArray(arrayNumber) {
    let bigNumber = !isNaN(arrayNumber[0]) ? arrayNumber[0] : 0;
    for (let i = 1; i < arrayNumber.length; i++) {
        if (!isNaN(arrayNumber[i]) && arrayNumber[i] > bigNumber) {
            bigNumber = arrayNumber[i];
        }
    }

    return bigNumber;
}

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));