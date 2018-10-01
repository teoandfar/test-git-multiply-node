// requires
const fs = require('fs');
// const fs = require('express');
// const fs = require('./file');

let base = 6;
let data = '';

for (let i = 1; i <= 10; i++) {
    console.log(`${base}*${i}=${base*i}`)
    data += `${base}*${i}=${base*i}\n`
}



// fs.writeFile('table-2.txt', 'hola mundo', (err) => {
// ./tables = table
fs.writeFile(`./tables/table-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`File table-${base} was created succesfully`);
})