const fs = require('fs');
const colors = require('colors');


let listTable = (base, limit = 10) => {
    console.log('=========================='.green);
    console.log(`TABLE OF ${base} until ${limit}`.green);
    console.log('=========================='.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base}*${i}=${base*i}`)
    }

}


// module.exports.createFile = (base) => {
let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Base: ${base} isn't a number `);
            return;
        }
        if (!Number(limit)) {
            reject(`Limit: ${limit} isn't a number `);
            return;
        }


        let data = '';

        for (let i = 1; i <= limit; i++) {
            console.log(`${base}*${i}=${base*i}`)
            data += `${base}*${i}=${base*i}\n`
        }

        // let file = 
        fs.writeFile(`./tables/table-${base}-al-${limit}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`table-${base}-al-${limit}.txt`)
        })
    });

}

module.exports = {
    // createFile: createFile
    createFile,
    listTable
}