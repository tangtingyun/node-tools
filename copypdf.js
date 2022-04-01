const fs = require('fs')
const path = require('path')

function walkFile(dir = __dirname, list = []) {
    let arr = fs.readdirSync(dir);
    arr.forEach(function(item) {
        let fullpath = path.resolve(dir, item);
        let stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            walkFile(fullpath, list);
        } else {
            list.push(fullpath);
        }
    });
    return list;
}
const desName = "/Users/zhangyifei/Desktop/yunpan/geek/OAuth 2.0实战课";
var res = walkFile(desName);

var pdfPath = path.resolve(desName, "pdf");
if (!fs.existsSync(pdfPath)) {
    fs.mkdirSync(pdfPath);
}

res.forEach(ele => {
    console.log(path.extname(path.basename(ele)))
    if (path.extname(ele) != '.pdf') return
    var readStream = fs.createReadStream(ele);
    var writeStream = fs.createWriteStream(path.resolve(pdfPath, path.basename(ele)));
    // 复制操作
    readStream.pipe(writeStream);
    console.log("移动完成")


    // 移动操作
    // fs.rename(ele, path.resolve(pdfPath, path.basename(ele)), (err) => {
    //     if (err) throw err;
    //     console.log('Rename complete!');
    // });
})


// console.log(res)