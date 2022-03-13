// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

const grow = x => x.sort((a, b) => a - b).reduce((a, b) => a * b);
