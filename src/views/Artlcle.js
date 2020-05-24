import React from "react";
import { useEffect ,useState} from "react";

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import SimpleMarkdown from 'simple-markdown';
import { separateDoc } from "../lib/separateMarkDown";

var mdOutput = SimpleMarkdown.defaultReactOutput
export function Article({dirName="",fileName=""}) {
    const [post,setPost] = useState({   title: [],description: [],parameter: {},content: []})
    useEffect(()=>{
        fetch(require(`../doc/${dirName}/${fileName}.md`))
            .then(e=>e.text())
            .then(text=>separateDoc(`${text}`))
            .then(e=>setPost(e))
    },[])

    return (
        <Grid item xs={12} md={8}>
            <h1>
                {mdOutput(post.title)}
            </h1>
            <Divider />
            <div>
                {mdOutput(post.content)}
            </div>
        </Grid>
    )
}