const argv = require('./config/yargs').argv;
const colors = require('colors');
// const colors = require('colors/safe');


const { createFile, listTable } = require('./multiplication/multiply');

let command = argv._[0];
console.log(argv.base, argv.limit);
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit);
        break;
    case 'create':
        console.log('Create');
        // createFile(base)
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created successfully: ${file.green} `, colors.green(file))).catch(e => console.log(e));
        break;
    default:
        console.log('not found')
}