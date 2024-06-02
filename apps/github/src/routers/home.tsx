import type { PropsWithChildren } from 'react'
import { json, useLoaderData, Link } from 'react-router-dom'
import { MainPage } from '@bugofbook/pages/main'
import CardActionArea from '@mui/material/CardActionArea';
type ArticleData = {
  title: string,
  fileAddress: string,
  date: string,
  tags: string[],
  description: string,
  image: string,
  imageTitle: string,
}
function LinkComponent ({href, children }:PropsWithChildren<{href: string}>) {
  return (
    <CardActionArea<typeof Link> component={Link} to={ href }>
      {children}
    </CardActionArea>
  )
}
type LoaderData = {
  articles: Array<ArticleData>
}
const loader = async () => {
  const articles = await fetch('assets/doc/home/index.json')
    .then(e => e.text())
    .then(e => JSON.parse(e))
    .then(list => list.map(({tag, ...others}: Record<string, string>) => ({...others, tags: tag?.split(',') || []}) as ArticleData))
  return await json({
    articles
  })
}
const action = async () => await json({})
const Component = () => {
  const {articles} = useLoaderData() as LoaderData
  return (
    <MainPage
      LinkComponent={LinkComponent}
      articles={articles}
    />
  )
}
Component.loader = loader
Component.action = action
export default Component
