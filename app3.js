// let argv = require('yargs').argv;
let argv = require('yargs').command('list', 'print in console the multiplication table', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv;
// const { createFile } = require('./multiplication/multiply')


let argv2 = process.argv;

console.log(argv);
console.log(argv.base);
console.log(argv.limit);
console.log(argv2);



// createFile(base)
//     .then(file => console.log(`File created successfully: ${file}`)).catch(e => console.log(e));