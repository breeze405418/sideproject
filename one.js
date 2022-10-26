// let age = 10;
// let disable = age > 18 ? '已成年' : '未成年';
// console.log('LOL', age, disable);
let word = 'fuck';
function reName() {
  let arr = word.split('').reverse('').join('');
  return arr
}

console.log(reName())