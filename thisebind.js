const pessoa = {
    suadacao: 'Bom dia',
    falar(){
        console.log(this.suadacao)
    }
}

pessoa.falar()

//undefined
const falar2 = pessoa.falar
falar2()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
