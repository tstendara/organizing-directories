const fs = require('fs')
const { exec } = require('child_process');
const mainDir = __dirname + '/dummy_download_file/' //keep note of the dir name

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
      reject()
    }else{
      resolve("created")
    }
  }))
})
  
const checkingFile = () => new Promise((resolve, reject) => {
  setTimeout(function(){
    fs.readdir(__dirname + '/Pictures/', (async(err, files) => {
      if(err) {
        reject()
      }else{
        console.log(files)
        let found = await checkingDir(files) 
        if(found){ resolve()}
        else{ reject()}
      }
    }))
  }, 
  500)
})

const deletingFiles = () =>  new Promise((resolve, reject) => {
  exec('mkdir test; ls', (err, stdout, stderr) => {
    if (err) {
      reject()
    } else {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    }
  });
})
    
const testing = () => {
  creatingFile().then(_=> checkingFile().then(_ => deletingFiles()))
}
testing()

  
