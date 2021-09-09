const fabricantes = ['BMW', 'Mustang', 'Porshe', 'Audi']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir)