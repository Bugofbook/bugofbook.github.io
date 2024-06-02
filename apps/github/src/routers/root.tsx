import type { PropsWithChildren } from 'react'

import { Outlet, json } from 'react-router-dom';
import { LayoutPage } from '@bugofbook/pages/system'
import Box from '@mui/system/Box'
import { Link as RouteLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

const title="Blog"

const sections = [
  { title: '首頁', url: '' },
  { title: 'Javascript', url: 'javascript' },
  { title: '小作品', url: 'project' },
  { title: '其他', url: 'others' },
]
// sideBar
const sideTitle = 'About Me'
const sideDescription = '正在架設自己的網站的軟體工程師'
const socialData = [
  { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/Bugofbook'}
]
function LinkComponent ({to, children }:PropsWithChildren<{to: string}>) {
  return (
    <Box<typeof RouteLink> component={RouteLink} to={ to } sx={{padding: '4px', flexShrink: '0px', flexWrap: 'nowrap', color: 'inherit'}}>
      {children}
    </Box>
  )
}

const loader = async () => await json({})
const action = async () => await json({})
const Component = () => {
  return (
    <LayoutPage
      headerData={{
        titleContent:title,
        sectionData: sections
      }}
      sidebarData={{
        titleContent: sideTitle,
        descriptionContent: sideDescription,
        socialData: socialData
      }}
      component={{
        headerLink: LinkComponent
      }}
    >
      <Outlet />
    </LayoutPage>
  )
}
Component.loader = loader
Component.action = action
export default Component;
