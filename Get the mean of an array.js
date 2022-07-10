// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

const getAverage = (marks, sum) => Math.floor(sum = marks.reduce ((x, i) => (x + i)) / marks.length)
