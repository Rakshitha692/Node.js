const fs = require("fs");

if (!fs.existsSync("docs")) {
fs.mkdir("docs", (err) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log("Directory created successfully!");
    }
});
}

fs.writeFile("docs/info.txt", "This is some information about Node.js.", (err) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log("File created successfully!");
    }
});

fs.readFile("docs/info.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err.message);
    } else{
        console.log(data);
}
    
});

if (fs.existsSync("docs/info.txt")) {
    fs.unlink("docs/info.txt", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File deleted successfully!");
        }
    });
} 

// REMOVE DIRECTORY
if (fs.existsSync("docs")) {
    fs.rmdir("docs", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory deleted successfully!");
        }
    });
}