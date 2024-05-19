import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/system/Box';
import { styled } from '@mui/system';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {'Your Website'}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const FootContainer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(6),
}))

type Props = {
  description: string;
  title: string;
}
const Footer = ({ description, title }: Props) => {
  return (
    <FootContainer component={'footer'}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </FootContainer>
  );
}
export default Footer;
