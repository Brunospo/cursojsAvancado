const nums = [1,2,3,4,5]

let converte = nums.map(e => e * 2)

console.log(nums)
console.log(converte)

const triplo = e => e * 3
const somaDez = e => e + 10
const transfomaReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

converte = nums.map(triplo).map(somaDez).map(transfomaReal)

console.log(converte)