const fs = require('fs');
const ejs = require('ejs');

const groupName = 'sample';

const templatePath = `./src/${groupName}/base.ejs`;
const data = JSON.parse(fs.readFileSync(`./src/${groupName}/data.json`, 'utf8')).data;
const destPath = `./dest/${groupName}/`;

(() => {
	data.forEach((item: { fileName: string; }) => {
		console.log(item);
		ejs.renderFile(templatePath, item, (error: any, output: any) => {
			if(error) {
				console.log(error);
			} else {
				fs.writeFileSync(destPath + `${item.fileName}.html`, output);
			}
		});
	});
})();