function falarDepoisDe(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000);
    })
}

falarDepoisDe(3, 'Hello world').then(phrase => phrase.concat('!!')).then(finalPhrase => console.log(finalPhrase)).catch(e => console.log(e)) //caso tenha o reject ao invés do resolve