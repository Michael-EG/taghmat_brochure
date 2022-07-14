import React, { useState } from 'react';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  ListItem,
  Box,
  //   ThemeProvider,
  Paper,
  Tooltip,
  IconButton,
  SwipeableDrawer,
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import {
  dark_grey,
  medium_blue,
  medium_purple,
  very_light_red,
} from '../../public/colors';
import { lightBlue } from '@material-ui/core/colors';
import {
  officeEquipmentTextEN,
  officeSuppliesTextEN,
  printAndCopyMenu1EN,
  printAndCopyMenu1Link,
  printAndCopyMenu2EN,
  printAndCopyMenu2Link,
  printAndCopyMenu3EN,
  printAndCopyMenu3Link,
  printAndCopyMenu4EN,
  printAndCopyMenu4Link,
  printAndCopyMenu5EN,
  printAndCopyMenu5Link,
  printAndCopyMenu6EN,
  printAndCopyMenu6Link,
  printAndCopyMenu7EN,
  printAndCopyMenu7Link,
  printAndCopyTextEN,
  servicesMenu1EN,
  servicesMenu2EN,
  servicesMenu3EN,
  servicesMenu4EN,
  servicesMenu5EN,
  servicesMenu6EN,
  servicesMenu7EN,
  servicesMenu8EN,
  servicesMenu9EN,
  servicesTextEN,
  softwareSolutionsMenu1EN,
  softwareSolutionsMenu1Link,
  softwareSolutionsMenu2EN,
  softwareSolutionsMenu2Link,
  softwareSolutionsMenu3EN,
  softwareSolutionsMenu3Link,
  softwareSolutionsTextEN,
} from '../Navbar/Navbar_text';
import { logo_url } from '../../constants/keys';

const printAndCopyData = [
  { icon: <People />, label: printAndCopyMenu1EN, url: printAndCopyMenu1Link },
  { icon: <Dns />, label: printAndCopyMenu2EN, url: printAndCopyMenu2Link },
  {
    icon: <PermMedia />,
    label: printAndCopyMenu3EN,
    url: printAndCopyMenu3Link,
  },
  { icon: <Public />, label: printAndCopyMenu4EN, url: printAndCopyMenu4Link },
  { icon: <Public />, label: printAndCopyMenu5EN, url: printAndCopyMenu5Link },
  { icon: <Public />, label: printAndCopyMenu6EN, url: printAndCopyMenu6Link },
  { icon: <Public />, label: printAndCopyMenu7EN, url: printAndCopyMenu7Link },
];
const softwareSolutionsDate = [
  {
    icon: <People />,
    label: softwareSolutionsMenu1EN,
    url: softwareSolutionsMenu1Link,
  },
  {
    icon: <Dns />,
    label: softwareSolutionsMenu2EN,
    url: softwareSolutionsMenu2Link,
  },
  {
    icon: <PermMedia />,
    label: softwareSolutionsMenu3EN,
    url: softwareSolutionsMenu3Link,
  },
  // { icon: <Public />, label: printAndCopyMenu4EN },
  // { icon: <Public />, label: printAndCopyMenu5EN },
  // { icon: <Public />, label: printAndCopyMenu6EN },
  // { icon: <Public />, label: printAndCopyMenu7EN },
];
const servicesData = [
  { icon: <People />, label: servicesMenu1EN },
  { icon: <Dns />, label: servicesMenu2EN },
  { icon: <PermMedia />, label: servicesMenu3EN },
  { icon: <Public />, label: servicesMenu4EN },
  { icon: <Public />, label: servicesMenu5EN },
  { icon: <Public />, label: servicesMenu6EN },
  { icon: <Public />, label: servicesMenu7EN },
  { icon: <PermMedia />, label: servicesMenu8EN },
  { icon: <PermMedia />, label: servicesMenu9EN },
];

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function NavigationDrawer_EN({ toFooterScrollAction }) {
  const [open, setOpen] = useState(true);
  const [printAndCopyOpen, setPrintAndCopyOpen] = useState(false);
  const [softwareSolutionsOpen, setSoftwareSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  const router = useRouter();
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(!drawerState);
  };
  return (
    <div>
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <IconButton
        className="small-text"
        onClick={toggleDrawer(true)}
        // color="primary"
        aria-label="upload picture"
        component="span"
      >
        <ViewHeadlineIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box sx={{ display: 'flex' }}>
          <Paper
            elevation={0}
            sx={{ maxWidth: 256 }}
            className="light-background"
          >
            <FireNav component="nav" disablePadding>
              <ListItemButton component="a" href="#customized-list">
                <Image
                  src={logo_url}
                  alt="logo -small"
                  width={75}
                  height={75}
                  //   layout="fill"
                />
                {/* <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon> */}
                <div style={{ marginLeft: '15px' }}>
                  <ListItemText
                    sx={{ my: 0 }}
                    color={dark_grey}
                    primary="Taghmat"
                    secondary="Malaika"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                    }}
                  />
                </div>
              </ListItemButton>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    sx={{ height: 56 }}
                    onClick={() => {
                      router.push('/');
                    }}
                  >
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary="Home"
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>

              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    sx={{ height: 56 }}
                    onClick={() => {
                      router.push('/privacy');
                    }}
                  >
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary="Privacy"
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton
                    sx={{ height: 56 }}
                    onClick={() => {
                      toggleDrawer();
                      toFooterScrollAction();
                    }}
                  >
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                    <ListItemText
                      primary="Contact us"
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />
            </FireNav>
          </Paper>
          {/* </ThemeProvider> */}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
