// import React from 'react';
// import ReactDOM from 'react-dom';
import SimpleMarkdown from 'simple-markdown';
import { separateDoc } from "../src/lib/separateMarkDown";
var fs = require('fs')


it('aaa1', () => {
  // console.log(SimpleMarkdown.defaultRules);
  // let aaa = fs.readFileSync(`${__dirname}/../src/doc/javascript/react-1.md`,'utf-8')
  let aaa = fs.readFileSync(`${__dirname}/test1.md`,'utf-8')
  let parseTree = SimpleMarkdown.defaultBlockParse(aaa)
  // console.log(JSON.stringify(parseTree, null, 4));  
  let bbb = separateDoc(aaa)
  // console.log(JSON.stringify(bbb, null, 4));
  let ttt = fs.statSync(`${__dirname}/test1.md`,'utf-8')
  let ttt1 = new Date(ttt.birthtimeMs)
  // console.log(ttt1);
});

it("aaa2", ()=> {
  let aaa = fs.readFileSync(`${__dirname}/test2.md`,'utf-8')
  let parseTree = SimpleMarkdown.defaultBlockParse(aaa)
  console.log(JSON.stringify(parseTree, null, 4));    
})