import { Fragment } from 'react'
import type { FunctionComponent, PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container';
import Header from './header';
import Footer from './footer';
import Sidebar from './sideBar';
type Props = {
  headerData: {
    titleContent: string,
    sectionData: Array<{ title: string, url: string }>
  },
  sidebarData: {
    titleContent: string,
    descriptionContent: string,
    socialData: Array<{ name: string, icon: FunctionComponent<{}>, href: string }>,
  },
  component: {
    headerLink: FunctionComponent<PropsWithChildren<{to: string}>>,
  },
}
const Page = ({ headerData, children, sidebarData, component }: PropsWithChildren<Props>) => {
  return (
      <Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
              <Header
                titleContent={headerData.titleContent}
                sectionData={headerData.sectionData}
                LinkComponent={component.headerLink}
              />
                <Grid container spacing={1}>
                {children}
                <Sidebar
                  titleContent={sidebarData.titleContent}
                  descriptionContent={sidebarData.descriptionContent}
                  socialData={sidebarData.socialData}
                />
                </Grid>
              <Footer title="" description="" />
          </Container>
      </Fragment>
  )
}
export default Page;
