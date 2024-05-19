import { json, useLoaderData } from 'react-router-dom'
// import Page from '../pages/home'
import Page2 from '../pages/main'
type ArticleData = {
  title: string,
  fileAddress: string,
  date: string,
  tags: string[],
  description: string,
  image: string,
  imageTitle: string,
}
type LoaderData = {
  articles: Array<ArticleData>
}
const loader = async () => {
  const articles = await fetch('assets/doc/project/index.json')
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
    <Page2
      articles={articles}
    />
  )
}
Component.loader = loader
Component.action = action
export default Component
