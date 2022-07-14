import {
  AppBar,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import React, { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import useStyles from '../../utils/styles';
import PopupMenu_AR from '../PopupMenu/PopupMenu_AR';
import {
  officeEquipmentTextAR,
  officeSuppliesTextAR,
  printAndCopyMenu1AR,
  printAndCopyMenu1Key,
  printAndCopyMenu2AR,
  printAndCopyMenu2Key,
  printAndCopyMenu3AR,
  printAndCopyMenu3Key,
  printAndCopyMenu4AR,
  printAndCopyMenu4Key,
  printAndCopyMenu5AR,
  printAndCopyMenu5Key,
  printAndCopyMenu6AR,
  printAndCopyMenu6Key,
  printAndCopyMenu7AR,
  printAndCopyMenu7Key,
  printAndCopyTextAR,
  printAndCopyMenu1Link,
  printAndCopyMenu2Link,
  printAndCopyMenu3Link,
  printAndCopyMenu4Link,
  printAndCopyMenu5Link,
  printAndCopyMenu6Link,
  printAndCopyMenu7Link,
  // printAndCopyMenu8Link,
  // printAndCopyMenu9Link,
  servicesMenu1AR,
  servicesMenu1Key,
  servicesMenu2AR,
  servicesMenu2Key,
  servicesMenu3AR,
  servicesMenu3Key,
  servicesMenu4AR,
  servicesMenu4Key,
  servicesMenu5AR,
  servicesMenu5Key,
  servicesMenu6AR,
  servicesMenu6Key,
  servicesMenu7AR,
  servicesMenu7Key,
  servicesMenu8AR,
  servicesMenu8Key,
  servicesMenu9AR,
  servicesMenu9Key,
  servicesTextAR,
  softwareSolutionsMenu1AR,
  softwareSolutionsMenu1Key,
  softwareSolutionsMenu2AR,
  softwareSolutionsMenu2Key,
  softwareSolutionsMenu3AR,
  softwareSolutionsMenu3Key,
  softwareSolutionsTextAR,
  softwareSolutionsMenu1Link,
  softwareSolutionsMenu2Link,
  softwareSolutionsMenu3Link,
} from './Navbar_text';
import NavigationDrawer_AR from '../NavigationDrawer/NavigationDrawer_AR';
import { constactUS_AR, PrivacyText_AR } from './t_Navbar_text';

export default function Navbar_AR() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [largeView, setLargeView] = useState(true);
  const [drawerState, setDrawerState] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // setAnchorRef(null)
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const handleResize = () => {
    // console.log('home page size');
    // console.log(window.innerWidth);
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // function handleResize() {
      // Set window width/height to state
      if (window.innerWidth < 960) {
        setLargeView(false);
      } else {
        setLargeView(true);
      }
      // setWindowSize({
      //   width: window.innerWidth,
      //   height: window.innerHeight,
      // });
    }
    // console.log(windowSize);
  };
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
  // create an event listener
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // });
  // useEffect(() => {
  //   handleResize();
  //   // window.addEventListener('resize', handleResize);
  // });
  // useEffect(() => {
  //   handleResize();
  // }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <AppBar position="static" className={classes.navbar}>
      {/* <Toolbar> */}
      {/* main navbar row */}
      <div
        className={largeView ? 'navbar-mainDiv-ar' : 'navbar-mainDiv-mobile-ar'}
      >
        {/* navbar area */}
        <div
          className={
            largeView
              ? 'navbar-navigation-area-ar'
              : 'navbar-navigation-area-mobile-ar'
          }
        >
          {/* {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={servicesTextAR}
                popperPlacement="bottom-start"
                menuItems={[
                  {
                    key: servicesMenu1Key,
                    text: servicesMenu1AR,
                    url: printAndCopyMenu1Link,
                  },
                  {
                    key: servicesMenu2Key,
                    text: servicesMenu2AR,
                    url: printAndCopyMenu2Link,
                  },
                  {
                    key: servicesMenu3Key,
                    text: servicesMenu3AR,
                    url: printAndCopyMenu3Link,
                  },
                  {
                    key: servicesMenu4Key,
                    text: servicesMenu4AR,
                    url: printAndCopyMenu4Link,
                  },
                  {
                    key: servicesMenu5Key,
                    text: servicesMenu5AR,
                    url: printAndCopyMenu5Link,
                  },
                  {
                    key: servicesMenu6Key,
                    text: servicesMenu6AR,
                    url: printAndCopyMenu6Link,
                  },
                  {
                    key: servicesMenu7Key,
                    text: servicesMenu7AR,
                    url: printAndCopyMenu7Link,
                  },
                  {
                    key: servicesMenu8Key,
                    text: servicesMenu8AR,
                    url: printAndCopyMenu7Link,
                  },
                  {
                    key: servicesMenu9Key,
                    text: servicesMenu9AR,
                    url: printAndCopyMenu7Link,
                  },
                ]}
              />
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {officeSuppliesTextAR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {officeEquipmentTextAR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={softwareSolutionsTextAR}
                popperPlacement="bottom-end"
                menuItems={[
                  {
                    key: softwareSolutionsMenu1Key,
                    text: softwareSolutionsMenu1AR,
                    url: softwareSolutionsMenu1Link,
                  },
                  {
                    key: softwareSolutionsMenu2Key,
                    text: softwareSolutionsMenu2AR,
                    url: softwareSolutionsMenu2Link,
                  },
                  {
                    key: softwareSolutionsMenu3Key,
                    text: softwareSolutionsMenu3AR,
                    url: softwareSolutionsMenu3Link,
                  },
                ]}
              />
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <PopupMenu_AR
                buttonText={printAndCopyTextAR}
                popperPlacement="bottom-end"
                menuItems={[
                  { key: printAndCopyMenu1Key, text: printAndCopyMenu1AR, url: printAndCopyMenu1Link, },
                  { key: printAndCopyMenu2Key, text: printAndCopyMenu2AR, url: printAndCopyMenu2Link, },
                  // { key: printAndCopyMenu3Key, text: printAndCopyMenu3AR, url: printAndCopyMenu3Link, },
                  // { key: printAndCopyMenu4Key, text: printAndCopyMenu4AR, url: printAndCopyMenu4Link, },
                  { key: printAndCopyMenu5Key, text: printAndCopyMenu5AR, url: printAndCopyMenu5Link, },
                  { key: printAndCopyMenu6Key, text: printAndCopyMenu6AR, url: printAndCopyMenu6Link, },
                  { key: printAndCopyMenu7Key, text: printAndCopyMenu7AR, url: printAndCopyMenu7Link, },
                ]}
              />
            </div>
          )} */}
          {largeView && (
            <div className="navbar-navigation-item">
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {constactUS_AR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div className="navbar-navigation-item">
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">
                    {PrivacyText_AR}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div className="navbar-navigation-item">
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">الرئيسية</Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {!largeView && (
            <div>
              {/* <Button onClick={toggleDrawer(true)}>
                <Icon baseClassName="material-icons-two-tone">
                  <ViewHeadlineIcon />
                </Icon>
              </Button> */}
              <NavigationDrawer_AR />
              {/* <IconButton
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
                <p>hi</p>
              </SwipeableDrawer> */}
            </div>
          )}
        </div>

        {/* spacing area */}
        <div
          className={
            largeView
              ? 'navbar-spacing-area-ar'
              : 'navbar-spacing-area-mobile-ar'
          }
        ></div>
        {/* logo area */}
        <div
          className={
            largeView ? 'navbar-logo-area-ar' : 'navbar-logo-area-mobile-ar'
          }
        >
          {/* <div
            className={
              largeView
                ? 'navbar-logo-upper-text-area-ar'
                : 'navbar-logo-upper-text-area-mobile-ar'
            }
          >
            مؤسسة
          </div> */}
          <div
            className={
              largeView
                ? 'navbar-logo-main-text-area-ar'
                : 'navbar-logo-main-text-area-mobile-ar'
            }
          >
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  className={classes.brand}
                  // style={{ background: 'blue' }}
                >
                  طغمات الملائكة
                </Typography>{' '}
                {/* <br /> */}
              </Link>
            </NextLink>
          </div>
          <div
            className={
              largeView
                ? 'navbar-logo-secondary-text-area-ar'
                : 'navbar-logo-secondary-text-area-mobile-ar'
            }
          >
            <Typography className="small-text"></Typography>
          </div>
        </div>
      </div>
      {/* </Toolbar> */}
    </AppBar>
  );
}
