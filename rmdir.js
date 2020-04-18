const fs = require('fs')

function deleteDirPromise (path) {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, 'utf8', (error, files) => {
            if (error) {
                reject('Error al leer contenido de carpeta', error)
                return
            }
            resolve(`El contenido de la carpeta ${path}es: `, files)
            
            files.forEach((item) => {
                fs.unlink(`${path}/${item}`, (error) => {
                    if (error) {
                        reject(`Hubo un error al eliminar archivo ${item}`)
                        return
                    }
                    resolve(`Se eliminó correctamente el archivo ${item}`)
                })    
            })
        
            fs.rmdir(path, (error) => {
                if (error) {
                    console.error(`Hubo un error al eliminar la carpeta ${path}`, error)
                }
                console.log(`Se eliminó la carpeta ${path} correctamente`)
            })
        })
    })
}



async function principal() {
    const dirToDelete = await deleteDirPromise('newDir')    
    return dirToDelete
}

principal()
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => console.error(error))