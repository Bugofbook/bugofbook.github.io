import SimpleMarkdown from 'simple-markdown';
import { compose } from "redux";

/**
 * 
 * @param {String} Str 
 * @returns {{content:[SimpleMarkdown.SingleASTNode],title:[SimpleMarkdown.SingleASTNode],description:[SimpleMarkdown.SingleASTNode],parameter:Object}}
 */
export function separateDoc(Str="") {
    let aaa = separateMarkdownToData(Str)
    return compose(
        remarkContent,
        separateParameterFromData,
        separateDescriptionFromData,
        separateTitleFromData,
    )({"content":aaa})
}
function separateMarkdownToData(Str="") {
    return SimpleMarkdown.defaultBlockParse(Str)
}
function separateTitleFromData(obj={}) {
    let {content,...others} = obj
    let titleIndex = [...content].findIndex(e=>(e["type"]==="heading" && e["level"]===1))
    let title = [...content][titleIndex]["content"]
    return {
        ...others,
        title,
        "content":[...content].slice(titleIndex + 1)
    }
}
function separateDescriptionFromData(obj={}) {
    let {content,title,...others} = obj
    let h2Index = [...content].findIndex(e=>(e["type"]==="heading" && e["level"]===2))
    return {
        ...others,
        title,
        "description": [...content].slice(0,h2Index),
        "content":[...content].slice(h2Index + 1)
    }
}
function separateParameterFromData(obj={}) {
    let {content,title,description,...others} = obj
    let h2Index = [...content].findIndex(e=>(e["type"]==="heading" && e["level"]===2))
    let parameterArr = [...content][h2Index - 1]["items"]
    let parameter = [...parameterArr]
        .map(e=>[...e].reduce((preStr,curEle)=>preStr + curEle['content'],""))
        .map(e=>`${e}`.split(":"))
        .map(([a,b])=>([a,`${b}`.split(",")]))
    return {
        ...others,
        title,
        description,
        parameter,
        "content":[...content].slice(h2Index + 1)
    }
}
function remarkContent(obj={}) {
    let {content,title,description,parameter,...others} = obj
    return {
        ...others,
        title,
        description,
        parameter,
        "content":[...content].map(({type,level,...others})=> (type === "heading") ? ({...others,type,"level":level - 1}) : ({...others,type}))
    }
}