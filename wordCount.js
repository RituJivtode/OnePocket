const fs = require("fs")

const fileName = 'data.txt';
const countWord = function(fileName){
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        console.error('Error while reading the file');
        return;
      }
  
      const words = data.split(/\s+/).filter(word => word !== '');
      const wordCount = words.length;
      console.log('Total word count' + wordCount);
    });
  }
  

  countWord(fileName);