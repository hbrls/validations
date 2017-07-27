const fs = require('fs');
const readline = require('readline');
const validate = require('../lib/bankCard');


const rl = readline.createInterface({
  input: fs.createReadStream('./secret/jiaotongyinhang.txt')
});

rl.on('line', (line) => {
  if (!validate(line)) {
    console.log(line);
  }
});
