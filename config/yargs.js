const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('list', 'print in console the multiplication table', opts)
    .command('create', 'create a file with a new table of multiplication', opts)
    .help()
    .argv;


module.exports = {
    argv
}