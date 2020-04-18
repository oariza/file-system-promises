const fs = require('fs')

function copyFilePromise(path, newPath) {
    return new Promise ((resolve, reject) => {
        fs.copyFile(path, newPath, (error) => {
            if (error) {
                reject('Error al copiar archivo', error)
                return
            }
            resolve(`El archivo ${path} se copió correctamente`)
        })
    })
}

async function principal() {
    const fileToCopy = await copyFilePromise('test.txt', 'test2.txt')    
    return fileToCopy
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error(error))