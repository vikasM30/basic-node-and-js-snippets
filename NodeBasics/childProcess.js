// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// const execFile = require('child_process').execFile;
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//     if (error) {
//         console.error('stderr', stderr);
//         throw error;
//     }
//     console.log('stdout', stdout);
// });


const exec = require('child_process').exec;
exec('for i in $( ls -LR ); do echo item: $i; done', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    console.log('stderr ', stderr);
});