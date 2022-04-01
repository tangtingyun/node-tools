const fs = require('fs')
const path = require('path')
const { commandSpawn } = require('./sample/utils/terminal');

// adb shell screencap -p /sdcard/screen2.png
// adb pull /sdcard/screen1.png

// adb shell uiautomator dump /sdcard/ui.xml
commandSpawn("adb", ["shell", "uiautomator", "dump", "/sdcard/ui.xml"])

// adb pull /sdcard/ui.xml 
commandSpawn("adb", ["pull", "/sdcard/ui.xml"])
