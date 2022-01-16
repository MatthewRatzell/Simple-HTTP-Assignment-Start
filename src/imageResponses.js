const fs = require('fs');// pull in the file system module

// loading some files in
const spongeGar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongeGar);
  response.end();
};

module.exports.getImage = getImage;
