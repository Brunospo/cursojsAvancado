const alunos = [
    {nome: 'joao', nota: 7.7, bolsista: false},
    {nome: 'joao', nota: 9, bolsista: true},
    {nome: 'joao', nota: 5.2, bolsista: true},
    {nome: 'joao', nota: 8, bolsista: false}
]

console.log(alunos.map(e => e.nota))
const resultado = alunos.map(e => e.nota).reduce((acumulador, atual) => {
    console.log(acumulador,atual)
    return acumulador + atual
} /* ,0 */)

console.log(resultado)