const fs = require('fs')
const path = require('path')
const { commandSpawn } = require('./sample/utils/terminal');


var uiPath = path.resolve(__dirname, "ui.xml");
if (fs.existsSync(uiPath)) {
    fs.rmSync(uiPath);
}

// adb shell screencap -p /sdcard/screen2.png
// adb pull /sdcard/screen1.png

// adb shell uiautomator dump /sdcard/ui.xml
commandSpawn("adb", ["shell", "uiautomator", "dump", "/sdcard/ui.xml"])
    .then(() => {
        // adb pull /sdcard/ui.xml 
        commandSpawn("adb", ["pull", "/sdcard/ui.xml"])
    })