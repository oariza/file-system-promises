const fs = require('fs')

function readDirPromise (path) {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, 'utf8', (error, files) => {
            if (error) {
                reject(`Error al leer contenido de carpeta ${path}`, error)
                return
            }
            resolve('El contenido de la carpeta es: ', files)
        })
    })
}

async function principal() {
    const dirToRead = await readDirPromise('newDir')    
    return dirToRead
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error(error))