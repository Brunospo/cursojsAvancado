const alunos = [
    {nome: 'joao', nota: 7.7, bolsista: false},
    {nome: 'joao', nota: 9, bolsista: true},
    {nome: 'joao', nota: 5.2, bolsista: true},
    {nome: 'joao', nota: 8, bolsista: false}
]

//Todos sao bolsitas??
const resultado = alunos.map(e => e.bolsista).reduce((acumulador,atual) => {
    return acumulador && atual
})

console.log(resultado)

//Tem algum bolsista?
const resultado2 = alunos.map(e => e.bolsista).reduce((acumulador,atual) => {
    return acumulador || atual
})

console.log(resultado2)