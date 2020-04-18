const fs = require('fs')

function readFilePromise (path) {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`El archivo ${path} dice ${data}`)
        })
    })
}

async function principal() {
    const fileToRead = await readFilePromise('test.txt')    
    return fileToRead
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error('Error al leer el archivo', error))