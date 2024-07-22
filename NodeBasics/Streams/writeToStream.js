const fileSystem = require("fs");
var data = "Sample text";

const writeStream = fileSystem.createWriteStream("output");

writeStream.write(data, "UTF8");

writeStream.end()

writeStream.on("finish", () => {
	console.log("Finished writing");
});

writeStream.on("error", (error) => {
	console.log(error.stack);
});