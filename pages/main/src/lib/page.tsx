import type { FunctionComponent, PropsWithChildren } from 'react'
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
  }>,
  LinkComponent: FunctionComponent<PropsWithChildren<{href: string}>>
}

function Page({articles, LinkComponent}: Props) {
  return (
    <Grid  container item xs={12} md={8} spacing={1}>
      {
        Array.isArray(articles) ? articles.map(post => {
          return (
            <Grid item xs={12} md={6} key={post.fileAddress}>
              <LinkComponent href={ post.fileAddress }>
                <FeaturedPost key={post.title} post={post} />
              </LinkComponent>
            </Grid>
          )
        }) : null
      }
    </Grid>
  )
}
export default Page;
