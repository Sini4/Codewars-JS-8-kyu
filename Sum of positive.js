// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr, res = []) {
  let flt = arr.filter(x => Math.sign(x) === 1 ? res.push(x) : console.log('SRAKA'))
  return res.reduce((k,j) => k + j, 0)
}
