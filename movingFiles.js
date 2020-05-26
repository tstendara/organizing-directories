const path = require('path')
const fs = require('fs')
require('log-timestamp');
const downloadsFile = './Downloads';
const downloadDir = path.join(__dirname, 'Downloads/')
console.log(`Watching for file changes on ${downloadsFile}`);


const picsDir = path.join(__dirname + '/Pictures/')
const appsDir = path.join('/Applications/') 
const fontsDir = path.join(__dirname + '/fonts/')
const iconsDir = path.join(__dirname + '/icons/')
const movieDir = path.join(__dirname + '/Movies/')
const validExtension = ['app', 'ttf', 'zip', 'jpg', 'png', 'ico', 'dmg', 'art']

const organizingFiles = (fileExt, curFile) => {
    if(fileExt === 'app' || fileExt === 'dmg'){
        fs.rename(downloadDir + curFile, appsDir + curFile, (() => {}))
    }else if(fileExt === 'jpg' || fileExt === 'png' || fileExt === 'art') {
        fs.rename(downloadDir + curFile, picsDir + curFile, (() => {})) 
    }else if (fileExt === 'ttf') {
        fs.rename(downloadDir + curFile, fontsDir + curFile, (() => {}))
    }else if(fileExt === 'ico') {
        fs.rename(downloadDir + curFile, iconsDir + curFile, (() => {}))
    }else if(fileExt === 'mp4' || fileExt === 'mov'){
        fs.rename(downloadDir + curFile, movieDir + curFile, (() => {}))
    }
}


const gettingFiles = async() => {
    let done = false
    let m = new Promise((resolve, reject) => {
        fs.readdir(downloadDir, ((err, files) => {
            if(err) {
                return console.log('Error reading file ', err)
            }
            files.forEach((curFile) => {
                fileExt = curFile.slice(-3)
                // Check file extension to see if it can be filtered properly
                if(validExtension.includes(fileExt)) {
                    organizingFiles(fileExt, curFile)
                    done = true
                }
            })
            if(done){
                console.log('finished')
                resolve('done')
            }
    }))

    })
    return m
}


const watchingFolder = () => {
    fs.watch(downloadsFile, async(event, filename) => {
        if (filename) {
            gettingFiles()
        }
    });    
}
watchingFolder()

