// import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Markdown from 'react-markdown'
type Props = {
  articleContent: string
}
export function Article({articleContent}: Props) {
    return (
        <Grid item xs={12} md={8}>
          <Markdown>{articleContent}</Markdown>
        </Grid>
    )
}
export default Article;

