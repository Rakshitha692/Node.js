const fs = require("fs");

const readableStream = fs.createReadStream("docs/Hugefile.txt", "utf8");
console.log(readableStream);
const writableStream = fs.createWriteStream("docs/Hugefile_copy.txt");

readableStream.on("data", (buffer) => {
    writableStream.write(buffer);
});

readableStream.on("end", () => {
    writableStream.end();
});

readableStream.on("error", (err) => {
    console.log(err.message);
});
writableStream.on("error", (err) => {
    console.log(err.message);
}); 
