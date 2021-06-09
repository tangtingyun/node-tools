const fs = require('fs')
const path = require('path')
const { commandSpawn } = require('./sample/utils/terminal');


fs.promises.readdir(__dirname, { withFileTypes: true }).then(fileList => {
    fileList.filter(file => {
        // const stat = fs.statSync(file)
        // console.log(stat.isDirectory());
        return file.name == 'input';
    }).map(async file => {
        const outDirName = `${file.name}-webp`
        if (!fs.existsSync(outDirName)) {
            fs.mkdirSync(outDirName)
        }
        const outFile = path.resolve(__dirname, outDirName)
        console.log(outFile)

        await commandSpawn("ls", ["-l"])

    })
});