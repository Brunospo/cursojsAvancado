const nomeDeArquivos = ['trabalho.doc', 'index.js', 'virus.bat', 'apagar.txt']

function verificaVirus(arrayDeArquivos){

const verifica = arquivo => {
  	const extensao = arquivo.slice(arquivo.indexOf('.') + 1) //poderia ser o indexOf ou includes
    return extensao === 'bat'
  }
  
	const resultado = arrayDeArquivos.some(verifica)
  
  console.log(resultado)
}

verificaVirus(nomeDeArquivos)