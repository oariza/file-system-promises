const fs = require('fs')

function createDirPromise (path) {
    return new Promise ((resolve, reject) => {
        fs.mkdir(path, (error) => {
            if (error) {
                reject("Hubo un error al crear la carpeta", error)
            }
            resolve(`Se creó correctamente el directorio ${path}`)
        })
    })
}

async function principal() {
    const dirToCreate = await createDirPromise('newDir')    
    return dirToCreate
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error(error))