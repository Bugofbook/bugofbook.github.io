import React from 'react';
import { useEffect ,useState} from "react";
import { ReactReduxContext } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Header from '../component/Header';
import MainFeaturedPost from '../component/MainFeaturedPost';
import FeaturedPost from '../component/FeaturedPost';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';


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
    description:
      '剛入碼農不久的菜雞一隻',
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
                <main>
                    {children}
                </main>
                <Footer title="Footer" description="Something here to give the footer a purpose!" />
            </Container>
        </React.Fragment>
    )
}

export function HomePage() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
      let aaa = require.context('../doc/home',false, /\.md$/).keys().map(e=>e.slice(2)).map(e=>require(`../doc/home/${e}`))
      aaa.forEach(post=>fetch(`${post}`).then(e=>e.text()).then(e=>setPosts(pre=>[...pre,e])))
    },[])
    return (
        <Pages>
            <Main title="From the firehose" posts={posts} />
            <Sidebar 
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
        </Pages>
    )
}
export function JavascriptPage() {
    useEffect(()=>{
        let aaa = require.context('../doc/javascript',false, /\.md$/).keys().map(e=>e.slice(2)).map(e=>require(`../doc/javascript/${e}`))
        aaa.forEach(post=>fetch(`${post}`).then(e=>e.text()).then(e=>setPosts(pre=>[...pre,e])))
      },[])  
    return (
        <Pages>
            <Main title="From the firehose" posts={posts} />
            <Sidebar 
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
        </Pages>
    )
}
export function PHPPage() {
    return (
        <Pages>
            <Typography variant={"h1"}>
                PHP
            </Typography>
        </Pages>
    )
}
export function PythonPage() {
    return (
        <Pages>
            <Typography variant={"h1"}>
                Python
            </Typography>
        </Pages>
    )
}
export function MathPage() {
    return (
        <Pages>
            <Typography variant={"h1"}>
                Math
            </Typography>
        </Pages>
    )
}
export function ProjectPage() {
    return (
        <Pages>
            <Typography variant={"h1"}>
                Project
            </Typography>
        </Pages>
    )
}
export function OthersPage() {
    return (
        <Pages>
            <Typography variant={"h1"}>
                Others
            </Typography>
        </Pages>
    )
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
// Whoops404
// export default {
//     HomePage,
//     JavascriptPage
// }