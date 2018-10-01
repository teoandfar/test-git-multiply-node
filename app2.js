// const multiplicar = require('./multiplication/multiply')
const { createFile } = require('./multiplication/multiply')
let base = 'abs';


// console.log(module);
// console.log(process);
// console.log(process.argv);
// console.log('uhmmm')
// console.log(process.argv);

let argv = process.argv;
let param = argv[2];

if (param) {
    let tempbase = param.split('=')[1];
    if (tempbase) {
        base = tempbase;
    }
}



createFile(base)
    .then(file => console.log(`File created successfully: ${file}`)).catch(e => console.log(e));