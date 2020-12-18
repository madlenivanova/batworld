const fs = require("fs")
const path = require("path")

exports.onPostBuild = (props) => {
  if (!process.env.GATSBY_OUTPUT_JSON) return;
  
  const data = fs.readFileSync('./public/index.html');
  const html = data.toString();

  const leadingTagsLength = '<!DOCTYPE html><hsInterativeStory>'.length
  const trailingTagsLength = '</hsInterativeStory>'.length

  const rawJson = html.substr(leadingTagsLength + 1, html.length - leadingTagsLength - trailingTagsLength - 2);

  if (!fs.existsSync('./public/json')) fs.mkdirSync('./public/json');
  fs.writeFileSync(`./public/json/index.json`, rawJson)
}
