const path = require('path');
const fs = require('fs');




const pathToFile = path.resolve(__dirname, '..', 'logs/log.txt');

const createMessageLog = (message) => {
  const log = `\n[${new Date().toISOString()}] ${message}\n`;
  const appendFile = fs.appendFileSync(pathToFile, log);

  return appendFile;
}

module.exports = { createMessageLog };
