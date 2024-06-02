import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const SideBarAboutBox = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#EEEEEE',
}))

const SideBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(3),
}))

const data = {
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

export default function Sidebar() {
  return (
    <Grid item xs={12} md={4}>
      <SideBarAboutBox elevation={0}>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Typography>{data.description}</Typography>
      </SideBarAboutBox>
      <SideBarTitle variant="h6" gutterBottom>
        Archives
      </SideBarTitle>
      {data.archives.map(archive => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <SideBarTitle variant="h6" gutterBottom>
        Social
      </SideBarTitle>
      {data.social.map(network => (
        <Link display="block" variant="body1" href="" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
