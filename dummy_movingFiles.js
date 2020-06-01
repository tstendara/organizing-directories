const path = require('path')
const fs = require('fs')
require('log-timestamp');
const downloadsFile = './dummy_download_file';
const downloadDir = path.join(__dirname, 'dummy_download_file/')
console.log(`Watching for file changes on ${downloadsFile}`);


const picsDir = path.join(__dirname + '/Pictures/')
const appsDir = path.join('/Applications/') 
const fontsDir = path.join(__dirname + '/fonts/')
const iconsDir = path.join(__dirname + '/icons/')
const movieDir = path.join(__dirname + '/Movies/')
const validExtension = ['app', 'ttf', 'zip', 'jpg', 'png', 'ico', 'dmg']

const organizingFiles = (fileExt, curFile) => {
    const curPath = downloadDir + curFile

    if(fileExt === 'app' || fileExt === 'dmg'){
        fs.rename(curPath, appsDir + curFile, (() => {}))
    }else if(fileExt === 'jpg' || fileExt === 'png') {
        fs.rename(curPath, picsDir + curFile, (() => {})) 
    }else if (fileExt === 'ttf') {
        fs.rename(curPath, fontsDir + curFile, (() => {}))
    }else if(fileExt === 'ico') {
        fs.rename(curPath, iconsDir + curFile, (() => {}))
    }else if(fileExt === 'mp4' || fileExt === 'mov'){
        fs.rename(curPath, movieDir + curFile, (() => {}))
    }
}

const gettingFiles = () => {
        fs.readdir(downloadDir, ((err, files) => {
            if(err) {
                return console.log('Error reading file ', err)
            }
            files.forEach((curFile) => {
                fileExt = curFile.slice(-3)
                // Check file extension to see if it can be filtered properly
                if(validExtension.includes(fileExt)) {
                    organizingFiles(fileExt, curFile)
                }
            })
    }))
}

const watchingFolder = () => {
    fs.watch(downloadsFile, (event, filename) => {
        if (filename) {
            gettingFiles()
        }
    });    
}
watchingFolder()