const chalk = require('chalk')
const exec = require('child_process').exec;
function execute() {
    exec('echo "# skrskr" >> README.md', (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            console.log(chalk.red(error))
            process.exit()
        }
        console.log(chalk.green(stdout))
        console.log(chalk.green('\n √ Generation completed!'))
        process.exit()
    })
}

module.exports = execute()

