const fs = require('fs')
const { exec } = require('child_process');
const mainDir = __dirname + '/dummy_download_file/' 

const checkingDir = async(files) => {
  let found = false
  files.forEach((file) => {
    if(file === 'test.png'){
      found = true
    }
  })
  return found
}

const creatingFile = () =>  new Promise((resolve, reject) => {
  fs.writeFile(mainDir + 'test.png',"", ((err) => {
    if(err){ 
      reject("creatingFile | Not creating ")
    }else{
      resolve("created")
    }
  }))
})
  
const checkingFile = () => new Promise((resolve, reject) => {
  setTimeout(function(){
    fs.readdir(__dirname + '/Pictures/', (async(err, files) => {
      if(err) {
        reject("checkingFile | Not able to read directory")
      }else{
        let found = await checkingDir(files) 
        if(found){ resolve()}
        else{ reject("checkingFile | Not finding generated file in /Pictures" )}
      }
    }))
  }, 
  500)
})

const deletingFiles = () =>  new Promise((resolve, reject) => {
  exec('rm Pictures/test.png', (err, stdout, stderr) => {
    if (err) {
      reject("deletingFiles | Unable to delete files")
    } else {
      resolve("Finished successfully!")
    }
  });
})
    
const testing = () => {
  creatingFile().then(_=> checkingFile().then(_ => deletingFiles().then(done => {console.log(done)})))
  .catch((func) => {
    console.log('Something went wrong at ', func)
  })
}
testing()

  
