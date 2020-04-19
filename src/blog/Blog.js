import React from 'react';
import { useEffect ,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: '首頁', url: 'Home' },
  { title: 'Javascript', url: 'Javascript' },
  { title: 'PHP', url: 'PHP' },
  { title: 'Python', url: 'Python' },
  { title: 'Ruby', url: 'Ruby' },
  { title: '數學', url: 'Math' },
  { title: '小作品', url: 'Project' },
  { title: '其他', url: 'Others' },
];

const mainFeaturedPost = {
  title: ' 歡迎來到我的部落格',
  description:
    "本首頁是用Matrial-UI上的例子來修改的，之後會慢慢修改",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  // linkText: 'Continue reading…',
};

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

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


export default function Blog() {
  const classes = useStyles();
  const [posts,setPosts] = useState([])
//   let aaa1 = "";
// let aaa2 = "";
// let aaa3 = "";
// let posts = []
  useEffect(() => {
    fetch(post1).then(e=>e.text()).then(e=>setPosts(pre=>[...pre,e]))
    fetch(post2).then(e=>e.text()).then(e=>setPosts(pre=>[...pre,e]))
    fetch(post3).then(e=>e.text()).then(e=>setPosts(pre=>[...pre,e]))
    return () => {
    };
  },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}


