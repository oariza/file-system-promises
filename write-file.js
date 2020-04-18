const fs = require('fs')

function writeFilePromise (path, data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile(path, data, 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve('Se creó correctamente el archivo')
        })
    })
}

async function principal() {
    const fileToWrite = await writeFilePromise('test.txt', 'Prueba de texto')    
    return fileToWrite
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error('Error al escribir el archivo', error))