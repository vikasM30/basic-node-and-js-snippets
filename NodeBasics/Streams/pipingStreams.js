const fileSystem = require("fs");

const readStream = fileSystem.createReadStream("input");
const writeStream = fileSystem.createWriteStream("output_piping");

readStream.pipe(writeStream);