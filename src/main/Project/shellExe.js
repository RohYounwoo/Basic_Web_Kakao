var { exec, spawn, execSync, spawnSync } = require('child_process');

exec('ipfs daemon', {encoding: "UTF-8"},function (err, stdout, stderr) {
    if (err) console.error(stderr);
    console.log(stdout);
});

// var ls = spawn('ls');
// ls.stdout.on('data', function (data) {
//   console.log(data.toString());
// });
// ls.stderr.on('error', function (err) {
//   console.error(err);
// });

// var data = execSync('node 45_command_line_args.js 10');
// console.log(data.toString());