const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send the error to the promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise doesn't accidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// demo HTML code
const sampleHtml = '<h1>This will be written to the file!</h1>'

writeFile(sampleHtml)
    .then(successfulResponse => {
        // this will run when we use `resolve()`
        console.log(successfulResponse);
    })
    .catch(errorResponse => {
        // this will run when we use `reject()`
        console.log(errorResponse);
    });

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        });        
    });
};

module.exports = { writeFile, copyFile };