const assert = require('assert');
const expect = require('expect')
const fs = require('fs')
// start script - done 

// test file creation in downloads file 
// test that file is moved to the correct file

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

    it("checking if file moved to the correct file", () => {
       fs.readdir(__dirname + '/Pictures/', ((err, files) => {
        if(err) {
          assert.equal(err, null), console.log(err)
        }else{
          files.forEach(file => {
            assert.equal(file, 'test.pn')
          })
        }
       }))
    })
  });

  
});
