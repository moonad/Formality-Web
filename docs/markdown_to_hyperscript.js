var fs = require("fs");
var md2json = require("simple-markdown").defaultBlockParse;

var path = require('path');

const file_path = "./markdown/overview/0.Overview";
var mdFile = fs.readFileSync(file_path+'.md', 'utf8');

const codeBGColor = "#F6F8FA"
/**
 *  TODO
 * - blockquote (não funcionando apropriadamente)
 * - table 
 * - footer
 * - term definition 
 */
const json2h = (node) => {
  var str = "";
  const make = (lv, node) => {

    const text = (txt) => {
      str += txt;
    };

    const line = (lv, s) => {
      str += "\n";
      for (var i = 0; i < lv; ++i) {
        str += "  ";
      }
      str += s;
    };

    if (node instanceof Array) {
      line(lv, "[");
      for (var i = 0; i < node.length; ++i) {
        make(lv + 1, node[i]);
        text(i < node.length - 1 ? "," : "");
      };
      line(lv, "]");
    } else {
      switch (node.type) {

        case "newline":
          line(lv, "h('br')");
          break;

        case "paragraph":
          line(lv, "h('p', {style: {'margin-top': '5px'}}, ");

          make(lv+1, node.content);
          line(lv, ")");
          break;

        case "text":
          line(lv, JSON.stringify(node.content));
          break;

        case "heading":
          if (node.level === 1) {
            line(lv, "h('h1', {style: {'margin-top': '25px'}}, ");
          } else if (node.level === 2) {
            line(lv, "h('h2', {style: {'margin-top': '20px'}}, ");
          } else {
            line(lv, "h('h3', {style: {'margin-top': '15px'}}, ");
          }
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "list":
          line(lv, "h(" + (node.ordered ? "'ol'" : "'ul'") + ", {style: {'margin-left': '23px'}}, [");
          for (var i = 0; i < node.items.length; ++i) {
            line(lv+1, "h('li', {style: {'margin-top': '7px'}}, ");
            make(lv+2, node.items[i]);
            line(lv+1, ")");
            text(",");
          }
          line(lv, "])");
          break;

        case "codeBlock":
          line(lv, "h('pre', {style: {'margin-top': '10px', 'margin-bottom': '10px', 'padding': '20px', 'background-color': '"+codeBGColor+"'}}, [");
          line(lv+1, "h('code.bash', {style: {'font-size': '15px'}}, ");
          line(lv+2, JSON.stringify(node.content));
          line(lv+1, ")");
          line(lv, "])");
          break;

        case "strong":
          line(lv, "h('b', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "em": 
          line(lv, "h('i', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "blockQuote":
          line(lv, "h('div', {style: {'margin-top': '25px', 'margin-bottom': '25px', 'margin-left': '20px', 'margin-right': '20px', 'color': '#6B737F', 'font-style': 'italic' }}, ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;

        case "inlineCode":
          line(lv, "h('code', {style: {'font-size': '15px', 'background-color': '"+codeBGColor+"', 'padding-left': '5px', 'padding-right': '5px', 'padding-top': '3px', 'padding-bottom': '3px'}}, `"+node.content+"`)");
          break;

        case "hr":
          line(lv, "h('hr', {style: {'margin-bottom': '15px'}})");
          break;

        case "link":
          line(lv, "h('a', {href: '"+node.target+"', style: {'color': '#0769D7', 'text-decoration': 'none'}},  ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;
        
        case "del": 
          line(lv, "h('del', ");
          make(lv + 1, node.content);
          line(lv, ")");
          break;
        
        case "table": 
          line(lv, "h('table', {style: {'border-collapse': 'collapse', 'margin-top': '20px', 'margin-bottom': '20px'}}, [");

            // ----- Header
            line(lv + 1, "h('tr', {style: {'border': '1px solid #dddddd', 'justify-content': 'flex-start'}}, [");
            for (var i = 0; i < node.header.length; ++i) {
              line(lv + 2, "h('th', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'text-align': 'left', 'font-weight': 'bold', 'font-size': '15px'}}, ");
                make(lv + 3, node.header[i]);
              line(lv + 2, ")");
              text(",");
            }
            line(lv, "]), ");
            // ------ 

            // ------ Cells
            for (var i = 0; i < node.cells.length; ++i) {
              line(lv, "h('tr', {style: {'border': '1px solid #dddddd', 'justify-content': 'flex-start'}}, [");
              for (var j = 0; j < node.cells[i].length; ++j) {
                line(lv + 2, "h('td', {style: {'border': '1px solid #dddddd', 'padding': '8px', 'font-size': '15px'}},");
                make(lv + 3, node.cells[i][j]);
                line(lv + 2, "), ");
                // text(",");
              }   
              line(lv, "]), ");
            }
           
          // ------

          line(lv, "])");
          break;

        case "image": 
        // line(lv, "h('div', {style: {'display': 'flex', 'justify-content': 'center', 'flex-direction': 'row' }}, [");
        line(lv+1, "h('img', {src: '" + node.target + "', style: {'max-width': '100%', 'height': 'auto' }} )");
        // line(lv, "]), ");
        break;

        default:
          line(lv, "h('div', 'UNKNOWN_TYPE: " + node.type + "')");
          break;
      }
    }
  };
  make(0, node);
  return str;
};

// console.log(":: MARKDOWN\n");
// console.log(markdown);
// console.log("");

console.log(":: JSON\n");
console.log(JSON.stringify(md2json(mdFile), null, 2));
console.log("");

//  ------ Hyperscript formatat
console.log("---------------------- OUTPUT");
console.log(json2h(md2json(mdFile), null, 2));

const requiredCode = `const h = require('inferno-hyperscript').h;
module.exports = `

// console.log(requiredCode);
// console.log(json2h(md2json(mdFile), null, 2));
fs.writeFile(file_path+".js", requiredCode + json2h(md2json(mdFile), null, 2), (err) => { 
  if (err) throw err;
  
  console.log(">>  "+file_path+".js created or updated ");
 });
