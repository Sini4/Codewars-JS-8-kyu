// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

const arrayPlusArray = (arr1, arr2) => arr1.reduce((x, y) => x + y) + arr2.reduce((x, y) => x + y);

// aktualisiert

const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((x, y) => x + y);
