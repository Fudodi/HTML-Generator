const fs = require('fs');
const ejs = require('ejs');

const groupName = 'sample';

const templatePath = `./src/${groupName}/base.ejs`;
const data = JSON.parse(fs.readFileSync(`./src/${groupName}/data.json`, 'utf8')).data;
const destPath = `./dest/${groupName}/`;

(() => {
	data.forEach((item: { fileName: string; }) => {
		ejs.renderFile(templatePath, item, (error: any, output: any) => {
			if(error) {
				console.log(error);
			} else {
				// 不要なtabと空の改行を削除
				const htmlData = output.replace(/\t/g,'').replace(/^\n/gm,'');
				fs.writeFileSync(destPath + `${item.fileName}.html`, htmlData);
			}
		});
	});
})();