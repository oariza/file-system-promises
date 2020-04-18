const fs = require('fs')

function appendFilePromise (path, data) {
    return new Promise ((resolve, reject) => {
        fs.appendFile(path, data, 'utf8', (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`Se agregaron nuevos datos al archivo ${path}`)
        })
    })
}

const newData = ' Hola koders'

async function principal() {
    const fileToAppend = await appendFilePromise('test.txt', newData)    
    return fileToAppend
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error('Error al agregar datos', error))