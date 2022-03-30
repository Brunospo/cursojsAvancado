//nome, marca,ano e cor
const carros = [
    {marca: 'bmw'},
    {marca: 'audi'},
    {marca: 'chevrolet'},
    {marca: 'mercedes'}
    ]
    
    const achaMarca = (marcaSolicitada, arrayDeCarros) => {
        const resultado = arrayDeCarros.find(carro => carro.marca === marcaSolicitada)
      console.log(resultado)
    }
    
    achaMarca('bmw', carros)