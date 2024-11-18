const path = require('path');
const fs = require('fs');

//

const pathToFolder= path.resolve(__dirname, '..', 'logs');

//


const createMessageLog = (message) => {

  const log = `\n[${new Date().toISOString()}] ${message}\n`;

  if(!fs.existsSync(path.resolve(__dirname, '..', `logs//log [${new Date().toLocaleDateString()}].txt`))) {
    const writeFile = fs.writeFileSync(pathToFolder + `/log [${new Date().toLocaleDateString()}].txt`, '', {encoding: 'utf-8'})
  }
  const appendFile = fs.appendFileSync(path.resolve(__dirname, '..', `logs/log [${new Date().toLocaleDateString()}].txt`), log);
}


module.exports = { createMessageLog };
