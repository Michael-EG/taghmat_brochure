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
import {
  officeEquipmentTextAR,
  officeSuppliesTextAR,
  printAndCopyMenu1AR,
  printAndCopyMenu1Link,
  printAndCopyMenu2AR,
  printAndCopyMenu2Link,
  printAndCopyMenu3AR,
  printAndCopyMenu3Link,
  printAndCopyMenu4AR,
  printAndCopyMenu4Link,
  printAndCopyMenu5AR,
  printAndCopyMenu5Link,
  printAndCopyMenu6AR,
  printAndCopyMenu6Link,
  printAndCopyMenu7AR,
  printAndCopyMenu7Link,
  printAndCopyTextAR,
  servicesMenu1AR,
  servicesMenu2AR,
  servicesMenu3AR,
  servicesMenu4AR,
  servicesMenu5AR,
  servicesMenu6AR,
  servicesMenu7AR,
  servicesMenu8AR,
  servicesMenu9AR,
  servicesTextAR,
  softwareSolutionsMenu1AR,
  softwareSolutionsMenu1Link,
  softwareSolutionsMenu2AR,
  softwareSolutionsMenu2Link,
  softwareSolutionsMenu3AR,
  softwareSolutionsMenu3Link,
  softwareSolutionsTextAR,
} from '../Navbar/Navbar_text';
import { logo_url } from '../../constants/keys';
const printAndCopyData = [
  { icon: <People />, label: printAndCopyMenu1AR, url: printAndCopyMenu1Link },
  { icon: <Dns />, label: printAndCopyMenu2AR, url: printAndCopyMenu2Link },
  {
    icon: <PermMedia />,
    label: printAndCopyMenu3AR,
    url: printAndCopyMenu3Link,
  },
  { icon: <Public />, label: printAndCopyMenu4AR, url: printAndCopyMenu4Link },
  { icon: <Public />, label: printAndCopyMenu5AR, url: printAndCopyMenu5Link },
  { icon: <Public />, label: printAndCopyMenu6AR, url: printAndCopyMenu6Link },
  { icon: <Public />, label: printAndCopyMenu7AR, url: printAndCopyMenu7Link },
];
const softwareSolutionsDate = [
  {
    icon: <People />,
    label: softwareSolutionsMenu1AR,
    url: softwareSolutionsMenu1Link,
  },
  {
    icon: <Dns />,
    label: softwareSolutionsMenu2AR,
    url: softwareSolutionsMenu2Link,
  },
  {
    icon: <PermMedia />,
    label: softwareSolutionsMenu3AR,
    url: softwareSolutionsMenu3Link,
  },
  // { icon: <Public />, label: printAndCopyMenu4EN },
  // { icon: <Public />, label: printAndCopyMenu5EN },
  // { icon: <Public />, label: printAndCopyMenu6EN },
  // { icon: <Public />, label: printAndCopyMenu7EN },
];
const servicesData = [
  { icon: <People />, label: servicesMenu1AR },
  { icon: <Dns />, label: servicesMenu2AR },
  { icon: <PermMedia />, label: servicesMenu3AR },
  { icon: <Public />, label: servicesMenu4AR },
  { icon: <Public />, label: servicesMenu5AR },
  { icon: <Public />, label: servicesMenu6AR },
  { icon: <Public />, label: servicesMenu7AR },
  { icon: <PermMedia />, label: servicesMenu8AR },
  { icon: <PermMedia />, label: servicesMenu9AR },
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

export default function NavigationDrawer_AR() {
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
        anchor="right"
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
                <div style={{ marginLeft: '40px' }}>
                  <ListItemText
                    sx={{ my: 0 }}
                    color={dark_grey}
                    primary="مؤسسة النور"
                    secondary="التجارية"
                    primaryTypographyProps={{
                      fontSize: 20,
                      fontWeight: 'medium',
                      letterSpacing: 0,
                      //   justifyContent: 'center',
                      textAlign: 'center',
                      //   textAlign: 'center',
                    }}
                    secondaryTypographyProps={{
                      //   justifyContent: 'flex-end',
                      textAlign: 'center',
                    }}
                  />
                </div>
                <div style={{ display: 'flex', flex: 1 }}></div>
                <Image
                  src={logo_url}
                  alt="logo -small"
                  width={75}
                  height={75}
                  //   layout="fill"
                />
              </ListItemButton>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemText
                      primary="الرئيسة"
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                        textAlign: 'right',
                        // marginRight: '10px',
                      }}
                    />
                    {/* <ListItemIcon
                      style={{ color: dark_grey, marginLeft: '10px' }}
                    >
                      <Home />
                    </ListItemIcon> */}
                  </ListItemButton>
                </ListItem>
              </Box>

              <Divider />

              <Box
                sx={{
                  bgcolor: printAndCopyOpen ? very_light_red : null,
                  pb: printAndCopyOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setPrintAndCopyOpen(!printAndCopyOpen)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: printAndCopyOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: printAndCopyOpen
                        ? 'rotate(-180deg)'
                        : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                  <ListItemText
                    // inset
                    primary={printAndCopyTextAR}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                      textAlign: 'right',
                    }}
                    secondary={`${printAndCopyMenu1AR}, ${printAndCopyMenu2AR}, ${printAndCopyMenu3AR}, ${printAndCopyMenu4AR}, ${printAndCopyMenu5AR}, ${printAndCopyMenu6AR}, ${printAndCopyMenu7AR}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: printAndCopyOpen ? 'transparent' : dark_grey,
                      textAlign: 'right',
                    }}
                    sx={{ my: 0 }}
                  />
                </ListItemButton>
                {printAndCopyOpen &&
                  printAndCopyData.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        if (item.url) {
                          router.push(item.url);
                        }
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                          textAlign: 'right',
                          paddingRight: '15px',
                        }}
                      />
                      {/* <div style={{ display: 'flex', flex: '1' }}></div> */}
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                    </ListItemButton>
                  ))}
              </Box>
              <Divider />

              <Box
                sx={{
                  bgcolor: softwareSolutionsOpen ? very_light_red : null,
                  pb: softwareSolutionsOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() =>
                    setSoftwareSolutionsOpen(!softwareSolutionsOpen)
                  }
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: softwareSolutionsOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: softwareSolutionsOpen
                        ? 'rotate(-180deg)'
                        : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                  <ListItemText
                    // inset
                    primary={softwareSolutionsTextAR}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                      textAlign: 'right',
                    }}
                    secondary={`${softwareSolutionsMenu1AR}, ${softwareSolutionsMenu2AR}, ${softwareSolutionsMenu3AR}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: softwareSolutionsOpen ? 'transparent' : dark_grey,
                      textAlign: 'right',
                    }}
                    sx={{ my: 0 }}
                  />
                </ListItemButton>
                {softwareSolutionsOpen &&
                  softwareSolutionsDate.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        if (item.url) {
                          router.push(item.url);
                        }
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                          textAlign: 'right',
                          paddingRight: '15px',
                        }}
                      />
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                    </ListItemButton>
                  ))}
              </Box>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemText
                      primary={officeEquipmentTextAR}
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                        textAlign: 'right',
                        paddingRight: '15px',
                      }}
                    />
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />
              <Box>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ height: 56 }}>
                    <ListItemText
                      primary={officeSuppliesTextAR}
                      primaryTypographyProps={{
                        color: dark_grey,
                        fontWeight: 'medium',
                        variant: 'body2',
                        textAlign: 'right',
                        paddingRight: '15px',
                      }}
                    />
                    {/* <ListItemIcon style={{ color: dark_grey }}>
                      <Home />
                    </ListItemIcon> */}
                  </ListItemButton>
                </ListItem>
              </Box>
              <Divider />

              <Box
                sx={{
                  bgcolor: servicesOpen ? very_light_red : null,
                  pb: servicesOpen ? 2 : 0,
                }}
              >
                <ListItemButton
                  alignItems="flex-start"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  sx={{
                    px: 3,
                    pt: 2.5,
                    pb: servicesOpen ? 0 : 2.5,
                    '&:hover, &:focus': {
                      '& svg': { opacity: 1 },
                    },
                  }}
                >
                  <KeyboardArrowDown
                    sx={{
                      mr: -1,
                      opacity: 1,
                      transform: servicesOpen ? 'rotate(-180deg)' : 'rotate(0)',
                      transition: '0.2s',
                      color: dark_grey,
                    }}
                  />
                  <ListItemText
                    // inset
                    primary={servicesTextAR}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                      textAlign: 'right',
                    }}
                    secondary={`${servicesMenu1AR}, ${servicesMenu2AR}, ${servicesMenu3AR}`}
                    secondaryTypographyProps={{
                      noWrap: true,
                      fontSize: 12,
                      lineHeight: '16px',
                      color: servicesOpen ? 'transparent' : dark_grey,
                      textAlign: 'right',
                    }}
                    sx={{ my: 0 }}
                  />
                </ListItemButton>
                {servicesOpen &&
                  servicesData.map((item) => (
                    <ListItemButton
                      key={item.label}
                      sx={{
                        py: 0,
                        minHeight: 32,
                        color: { dark_grey },
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        if (item.url) {
                          router.push(item.url);
                        }
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                          fontWeight: 'medium',
                          textAlign: 'right',
                          paddingRight: '15px',
                        }}
                      />
                      {/* <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon> */}
                    </ListItemButton>
                  ))}
              </Box>
            </FireNav>
          </Paper>
          {/* </ThemeProvider> */}
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
