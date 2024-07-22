const { demandOption } = require("yargs");
const yargs = require("yargs")

module.exports = () => {
    yargs.command({
        command: 'add',
        describe: "Add a new note",
        builder: {
            title: {
                describe: "Add Title",
                // demandOption: true,
                // type: 'string',
            }
        },
        handler: (argv) => console.log('Adding a new note.' + argv)
    })

    // console.log(yargs.argv)
    yargs.parse();
}