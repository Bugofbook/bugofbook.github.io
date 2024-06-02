import { Fragment } from 'react'
import type { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import Header from './header';
import Footer from './footer';
import Sidebar from './sideBar';
const LayoutPage = ({ children }: PropsWithChildren<unknown>) => {
  return (
      <Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
              <Header />
                <Grid container spacing={1}>
                {children}
                <Sidebar />
                </Grid>
              <Footer title="Footer" description="Something here to give the footer a purpose!" />
          </Container>
      </Fragment>
  )
}
export default LayoutPage;
