const assert = require('assert');
const expect = require('expect')
const fs = require('fs')
// start script - done 

// test file creation in downloads file 
// test that file is moved to the correct file

describe('Array', function() {
  const mainDir = __dirname + '/hola/'
  describe('creatingFile', function() {
    it('Should create file', function() {
      fs.writeFile(mainDir + 'test.png',"", ((err) => {
        if(err){ 
          new Error('something went wrong')
          console.log(err)
        }else{
          console.log('here ',err)
          expect(err).to.equal(null)
        }
        
      }))
    });
  });
});
