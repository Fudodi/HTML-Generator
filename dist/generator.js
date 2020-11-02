"use strict";
var fs = require('fs');
var ejs = require('ejs');
var groupName = 'sample';
var templatePath = "./src/" + groupName + "/base.ejs";
var data = JSON.parse(fs.readFileSync("./src/" + groupName + "/data.json", 'utf8')).data;
var destPath = "./dest/" + groupName + "/";
(function () {
    data.forEach(function (item) {
        ejs.renderFile(templatePath, item, function (error, output) {
            if (error) {
                console.log(error);
            }
            else {
                // 不要なtabと空の改行を削除
                var htmlData = output.replace(/\t/g, '').replace(/^\n/gm, '');
                fs.writeFileSync(destPath + (item.fileName + ".html"), htmlData);
            }
        });
    });
})();
