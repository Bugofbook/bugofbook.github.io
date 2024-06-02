import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom'
import { styled } from '@mui/system';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import Typography, { TypographyProps } from '@mui/material/Typography';
// import Link, { LinkProps } from '@mui/material/Link';

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
const ToolBarLink = styled(RouteLink)<LinkProps & React.RefAttributes<HTMLAnchorElement>>(({ theme }) => ({
  padding: theme.spacing(1),
  flexShrink: 0,
  flexWrap: 'nowrap',
  color: 'inherit',
}))
const title="Blog"

const sections = [
  { title: '首頁', url: '' },
  { title: 'Javascript', url: 'Javascript' },
  // { title: 'PHP', url: 'PHP' },
  // { title: 'Python', url: 'Python' },
  // { title: '數學', url: 'Math' },
  { title: '小作品', url: 'Project' },
  { title: '其他', url: 'Others' },
];

function Header() {
  return (
    <React.Fragment>
      <ToolBarFirst>
        {/* <Button size="small">Subscribe</Button> */}
        <ToolBarTitle
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {title}
        </ToolBarTitle>
        {/* <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button> */}
      </ToolBarFirst>
      <ToolBarSecond component={'nav'} variant="dense">
        {sections.map(section => (
          <ToolBarLink
            key={section.title}
            to={"/" + section.url}
          >
            {section.title}
          </ToolBarLink>
        ))}
      </ToolBarSecond>
    </React.Fragment>
  );
}

export default Header;
