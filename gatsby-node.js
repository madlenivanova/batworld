// const fs = require("fs")
// const path = require("path")

// const publicPath = './public';
// const jsonOutputPath = path.join(publicPath, 'json')

// exports.onPostBuild = (props) => {
//   if (!process.env.GATSBY_OUTPUT_JSON) return;

//   const data = fs.readFileSync(path.join(publicPath, 'index.html'));
//   const html = data.toString();

//   const leadingTagsLength = '<!DOCTYPE html><hsInterativeStory>'.length
//   const trailingTagsLength = '</hsInterativeStory>'.length

//   const rawJson = html.substr(leadingTagsLength + 1, html.length - leadingTagsLength - trailingTagsLength - 2);

//   if (!fs.existsSync(jsonOutputPath)) fs.mkdirSync(jsonOutputPath);
//   fs.writeFileSync(path.join(jsonOutputPath, 'story.json'), rawJson)
// }
