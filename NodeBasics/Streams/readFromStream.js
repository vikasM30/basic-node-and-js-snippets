const fileSystem = require("fs");
var data = "";

const readStream = fileSystem.createReadStream("input");

readStream.setEncoding("UTF8");

readStream.on("data", (chunk) => {
	data += chunk;
    console.log(chunk)
});

readStream.on("end", () => {
	console.log(data);
});

readStream.on("error", (error) => {
	console.log(error.stack);
});