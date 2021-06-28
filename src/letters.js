//Test
let letters = []
for (let i =0; i<26;i++){
      letters.push(String.fromCharCode(97+i))
}
const input = 'thinkful'
const shift = 3

if (!shift || shift ===0 || shift < -25 || shift > 25){
      return false
}
console.log(input.split(''))

Re
console.log(caesar("thinkful", 3))
console.log(caesar("thinkful", -3))
console.log(caesar("wklqnixo", 3, false))

console.log(caesar("This is a secret message!", 8))
console.log(caesar("BPQA qa I amkzmb umaaiom!", 8, false))

console.log(caesar("thinkful"))
console.log(caesar("thinkful", 99))
console.log(caesar("thinkful", -26))