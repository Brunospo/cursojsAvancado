const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 5200, fragil: true},
    {nome: 'Copo plastico', preco: 22.39, fragil: true},
    {nome: 'caixa', preco: 2.4, fragil: false},
]

const caro = e => e.preco >= 500
const fragil = e => e.fragil

console.log(produtos.filter(caro).filter(fragil))