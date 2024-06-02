import type { FunctionComponent } from 'react'

import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Link from '@mui/material/Link';

const SideBarAboutBox = styled(Paper)<PaperProps>(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#EEEEEE',
}))

const SideBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginTop: theme.spacing(3),
}))
type Props = {
  titleContent: string,
  descriptionContent: string,
  socialData: Array<{ name: string, icon: FunctionComponent<{}>, href: string }>,
}
export default function Sidebar({titleContent, descriptionContent, socialData}: Props) {
  return (
    <Grid item xs={12} md={4}>
      <SideBarAboutBox elevation={0}>
        <Typography variant="h6" gutterBottom>
          {titleContent}
        </Typography>
        <Typography>{descriptionContent}</Typography>
      </SideBarAboutBox>
      {/* <SideBarTitle variant="h6" gutterBottom>
        Archives
      </SideBarTitle>
      {data.archives.map(archive => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))} */}
      <SideBarTitle variant="h6" gutterBottom>
        Social
      </SideBarTitle>
      {socialData.map(Data => (
        <Link display="block" variant="body1" href={Data.href} key={Data.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <Data.icon />
            </Grid>
            <Grid item>{Data.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
