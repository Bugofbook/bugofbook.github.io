import type { LoaderFunctionArgs } from 'react-router-dom'
import { json, useLoaderData } from 'react-router-dom'
import { ArticlePage } from '@bugofbook/pages/article'
type LoaderData = {
  articleContent: string
}
const loader = async ({ params }: LoaderFunctionArgs) => {
  const articleContent = await fetch(`assets/doc/${params.dirID}/${params.articleID}.md`)
    .then(e => e.text())
  return await json<LoaderData>({
    articleContent
  })
}
const action = async () => await json({})
const Component = () => {
  const {articleContent} = useLoaderData() as LoaderData
  return (
    <ArticlePage
      articleContent={articleContent}
    />
  )
}
Component.loader = loader
Component.action = action
export default Component
