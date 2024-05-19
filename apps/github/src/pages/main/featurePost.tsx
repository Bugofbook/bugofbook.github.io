import { styled } from '@mui/system'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card, { CardProps } from '@mui/material/Card';
import Box, { BoxProps } from '@mui/system/Box'
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';


const CustomerCard = styled(Card)<CardProps>(({ theme }) => ({
  display: 'flex',
}))
const CardDetails = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
}))
const CustomerCardMedia = styled(CardMedia)<CardProps>(({ theme }) => ({
  width: 160,
}))

type Props = {
  post: {
    title: string,
    fileAddress: string,
    date: string,
    tags: string[],
    description: string,
    image: string,
    imageTitle: string,
  }
}

export default function FeaturedPost({ post }: Props) {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={ post.fileAddress }>
        <CustomerCard>
          <CardDetails>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </CardDetails>
          <Hidden xsDown>
            <CustomerCardMedia image={post.image} title={post.imageTitle} />
          </Hidden>
        </CustomerCard>
      </CardActionArea>
    </Grid>
  );
}

// FeaturedPost.propTypes = {
//   post: PropTypes.object,
// };
