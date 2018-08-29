const { prompt } = require('inquirer')
const chalk = require('chalk')
const exec = require('child_process').exec;
const ora = require('ora')
const question = [
    {
        type: 'input',
        name: 'project',
        message: 'Project name:',
        validate(val) {
            if (val !== '') {
                return true
            }
            return 'Project name is required!'
        }
    }
]

module.exports = prompt(question).then(({
    name,
    project
}) => {
    const spinner = ora('Start generating...')

    spinner.start()
    let cmdStr = `git init && git add .&& git commit -m "first commit" && git remote add origin https://github.com/Payne111/${project}.git && git push -u origin master`
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            console.log(chalk.red(error))
            process.exit()
        }
        console.log(chalk.green(stdout))
        console.log(chalk.green('\n √ Push completed!'))
        spinner.stop()
        process.exit()
    })

})