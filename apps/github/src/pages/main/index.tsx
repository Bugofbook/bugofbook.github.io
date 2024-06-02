import Grid from '@mui/material/Grid';
import FeaturedPost from './featurePost';

type Props = {
  articles: Array<{
    title: string,
    fileAddress: string,
    date: string,
    tags: string[],
    description: string,
    image: string,
    imageTitle: string,
  }>
}

function Page({articles}: Props) {
  return (
    <Grid  container item xs={12} md={8} spacing={1}>
        {(articles) ? articles.map(post => (<FeaturedPost key={post.title} post={post} />)) : null}
    </Grid>
  )
}
export default Page;
