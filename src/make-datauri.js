var fs = require("fs");
var list = fs.readFileSync("fontlist.txt").toString().replaceAll("\r","").split("\n");
function base64todataurl(b64) {
	return `data:application/octet-stream;base64,${b64}`;
}
var stuff = {};
for (var item of list) {
	var things = item.split(":");
	var b64 = fs.readFileSync(things[1],{encoding:"base64"});
	stuff[things[0]] = base64todataurl(b64);
}
fs.writeFileSync("datauri.js",`module.exports = ${JSON.stringify(stuff,null,"  ")};`);