import { Fragment } from 'react';
import type { FunctionComponent, PropsWithChildren } from 'react'
import { styled } from '@mui/system';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Typography, { TypographyProps } from '@mui/material/Typography';
const ToolBarFirst = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  borderBottom: `1px solid 1px`,
}))
const ToolBarSecond = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  justifyContent: 'space-between',
  overflowX: 'auto',
}))
const ToolBarTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  flex: 1,
}))
type Props = {
  titleContent: string,
  sectionData: Array<{ title: string, url: string }>
  LinkComponent: FunctionComponent<PropsWithChildren<{to: string}>>
}
function Header({titleContent, sectionData, LinkComponent}: Props) {
  return (
    <Fragment>
      <ToolBarFirst>
        {/* <Button size="small">Subscribe</Button> */}
        <ToolBarTitle
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {titleContent}
        </ToolBarTitle>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </ToolBarFirst>
      <ToolBarSecond component={'nav'} variant="dense">
        {sectionData.map(section => (
          <LinkComponent
            key={section.title}
            to={section.url}
          >
            {section.title}
          </LinkComponent>
        ))}
      </ToolBarSecond>
    </Fragment>
  );
}

export default Header;
