import React from 'react';
import { useEffect ,useState} from "react";
// import { ReactReduxContext } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Header from '../component/Header';
// import MainFeaturedPost from '../component/MainFeaturedPost';
import FeaturedPost from '../component/FeaturedPost';
// import Main from '../component/Main';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';

import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


import { Article } from "./Artlcle";
// const sections = [
//     { title: '首頁', url: 'Home' },
//     { title: 'Javascript', url: 'Javascript' },
//     { title: 'PHP', url: 'PHP' },
//     { title: 'Python', url: 'Python' },
//     { title: 'Ruby', url: 'Ruby' },
//     { title: '數學', url: 'Math' },
//     { title: '小作品', url: 'Project' },
//     { title: '其他', url: 'Others' },
//   ];


const sidebar = {
    title: 'About',
    description:'剛入碼農不久的菜雞一隻',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

function Pages({children}) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header />
                <Grid container>
                    {children}
                </Grid>
                <Footer title="Footer" description="Something here to give the footer a purpose!" />
            </Container>
        </React.Fragment>
    )
}

function MainPagesUI({posts}) {
    return (
        <Pages>
            <Grid container spacing={1}>
                <Grid  container item xs={12} md={8} spacing={1}>
                    {(posts) ? posts.map(post => (<FeaturedPost key={post.title} post={post} />)) : null}
                </Grid>
                <Sidebar 
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
                />
            </Grid>
        </Pages>
    )
}

function useReadArticle(dirName="") {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        try {
            let indexData = require(`../doc/${dirName}/index.json`)
                .map(data=>({...data,"tag":`${data["tag"]}`.split(",")}))
            setPosts(indexData)            
        } catch (error) {
            
        }
    },[])
    return [posts]
}

export function HomePage() {
    const [posts] = useReadArticle("home")
    return <MainPagesUI posts={posts} />
}
export function JavascriptPage() {
    const [posts] = useReadArticle("javascript")
    return <MainPagesUI posts={posts} />
}
export function PHPPage() {
    const [posts] = useReadArticle("php")
    return <MainPagesUI posts={posts} />
}
export function PythonPage() {
    const [posts] = useReadArticle("python")
    return <MainPagesUI posts={posts} />
}
export function MathPage() {
    const [posts] = useReadArticle("math")
    return <MainPagesUI posts={posts} />
}
export function ProjectPage() {
    const [posts] = useReadArticle("project")
    return <MainPagesUI posts={posts} />
}
export function OthersPage() {
    const [posts] = useReadArticle("others")
    return <MainPagesUI posts={posts} />
}
export function Whoops404({location}) {
    return (
        <Pages>
            <Typography variant={"h1"}>
                Resource not found at `${location.pathname}`
            </Typography>
        </Pages>
    )
}

export function ArticlePage({match}) {
    let {dirName,fileName} = match.params
    return (
        <Pages>
            <Grid container  spacing={1}>
                <Article dirName={dirName} fileName={fileName} />
                <Sidebar 
                    title={sidebar.title}
                    description={sidebar.description}
                    archives={sidebar.archives}
                    social={sidebar.social}
                    />
                </Grid>
        </Pages>
    )
}
// Whoops404
// export default {
//     HomePage,
//     JavascriptPage
// }