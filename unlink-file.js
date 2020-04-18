const fs = require('fs')

function unlinkFilePromise(path) {
    return new Promise ((resolve, reject) => {
        fs.unlink(`./${path}`, (error) => {
            if (error) {
                reject(error)
                return
            }
            resolve(`Se eliminó correctamente el archivo ${path}`)
        })
    })
}

async function principal() {
    const fileToUnlink = await unlinkFilePromise('test.txt')    
    return fileToUnlink
}

principal()
    .then(resultado => {
        console.log(    resultado)
    })
    .catch(error => console.error('Error al eliminar el archivo', error))