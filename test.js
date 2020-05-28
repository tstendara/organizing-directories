const assert = require('assert');
const expect = require('expect')
const fs = require('fs')

const checkingDir = async(files) => {
  let found = false
  files.forEach((file) => {
    if(file === 'test.png'){
      found = true
    }
  })
  return found
}

describe('Array', function() {
  const mainDir = __dirname + '/hola/' //keep note of the dir name

  describe('creatingFile', () => {
    it('Should create file', () => {
      fs.writeFile(mainDir + 'test.png',"", ((err) => {
        if(err){ 
          assert.equal(err, null), console.log(err)
        }else{
          assert.equal(err, null)
        }
      }))
    });

    it("checking if file was moved to Pictures", () => {
      this.timeout(100);

      setTimeout(function () {
        fs.readdir(__dirname + '/Pictures/', (async(err, files) => {
         if(err) {
          assert.equal(err, null), console.log(err)
         }else{
          let found = await checkingDir(files)
          assert.equal(found, true)
         }
        }))
      }, 100)
    })
  });
});
