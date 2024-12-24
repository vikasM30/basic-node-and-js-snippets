// const { demandOption } = require("yargs");
const yargs = require("yargs")

// const command = process.argv[2]
// console.log('normal process.argv: ', command)

    yargs.command({
        command: 'add',
        describe: "Add a new note",
        builder: {
            title: {
                describe: "Add Title",
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => console.log('Title: ', argv.title)
    })

    // console.log(yargs.argv)
    yargs.parse();
