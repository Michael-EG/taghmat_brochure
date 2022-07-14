import {
  AppBar,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  Icon,
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
import Stack from '@mui/material/Stack';
import {
  printAndCopyTextEN,
  printAndCopyMenu1EN,
  printAndCopyMenu1Key,
  printAndCopyMenu2EN,
  printAndCopyMenu2Key,
  printAndCopyMenu3EN,
  printAndCopyMenu3Key,
  printAndCopyMenu4EN,
  printAndCopyMenu4Key,
  printAndCopyMenu5EN,
  printAndCopyMenu5Key,
  printAndCopyMenu6EN,
  printAndCopyMenu6Key,
  printAndCopyMenu7EN,
  printAndCopyMenu7Key,
  softwareSolutionsTextEN,
  softwareSolutionsMenu1Key,
  softwareSolutionsMenu1EN,
  softwareSolutionsMenu2EN,
  softwareSolutionsMenu2Key,
  softwareSolutionsMenu3EN,
  softwareSolutionsMenu3Key,
  officeEquipmentTextEN,
  officeSuppliesTextEN,
  servicesTextEN,
  servicesMenu1EN,
  servicesMenu2EN,
  servicesMenu2Key,
  servicesMenu3EN,
  servicesMenu1Key,
  servicesMenu3Key,
  servicesMenu4Key,
  servicesMenu4EN,
  servicesMenu5Key,
  servicesMenu5EN,
  servicesMenu6Key,
  servicesMenu6EN,
  servicesMenu7EN,
  servicesMenu7Key,
  servicesMenu8Key,
  servicesMenu8EN,
  servicesMenu9EN,
  servicesMenu9Key,
  printAndCopyMenu1Link,
  printAndCopyMenu2Link,
  printAndCopyMenu7Link,
  printAndCopyMenu6Link,
  printAndCopyMenu5Link,
  printAndCopyMenu4Link,
  printAndCopyMenu3Link,
  softwareSolutionsMenu1Link,
  softwareSolutionsMenu2Link,
  softwareSolutionsMenu3Link,
} from './Navbar_text';
import PopupMenu_EN from '../PopupMenu/PopupMenu_EN';
import NavigationDrawer_EN from '../NavigationDrawer/NavigationDrawer_EN';
import { contactUS_EN, PrivacyText_EN } from './t_Navbar_text';

export default function Navbar_EN({ toFooterScrollAction }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [largeView, setLargeView] = useState(false);
  const anchorRef = useRef(null);

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

  // create an event listener
  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  // });
  // useEffect(() => {
  //   handleResize();
  //   // window.addEventListener('resize', handleResize);
  // }, [window]);
  // useEffect(() => {
  //   handleResize();
  //   // return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <AppBar position="static" className={classes.navbar}>
      {/* <Toolbar> */}
      {/* main navbar row */}
      <div className={largeView ? 'navbar-mainDiv' : 'navbar-mainDiv-mobile'}>
        {/* logo area */}
        <div
          className={largeView ? 'navbar-logo-area' : 'navbar-logo-area-mobile'}
        >
          {/* <div className="navbar-logo-column"></div> */}
          <div
            className={
              largeView
                ? 'navbar-logo-main-text-area'
                : 'navbar-logo-main-text-area-mobile'
            }
          >
            <NextLink href="/" passHref>
              <Link>
                <Typography
                  className={classes.brand}
                  // style={{ background: 'blue' }}
                >
                  Taghmat
                </Typography>{' '}
                {/* <br /> */}
              </Link>
            </NextLink>
          </div>
          <div
            className={
              largeView
                ? 'navbar-logo-secondary-text-area'
                : 'navbar-logo-secondary-text-area-mobile'
            }
          >
            <Typography className="small-text">Malaika Family</Typography>
          </div>
        </div>
        {/* spacing area */}
        <div
          className={
            largeView ? 'navbar-spacing-area' : 'navbar-spacing-area-mobile'
          }
        ></div>
        {/* navbar area */}
        <div
          className={
            largeView
              ? 'navbar-navigation-area'
              : 'navbar-navigation-area-mobile'
          }
        >
          {/* {largeView ? (
            <div>

            </div>
          ) : ( */}
          {!largeView && (
            <div>
              {/* <Button onClick={toggleDrawer(true)}>
                <Icon baseClassName="material-icons-two-tone">
                  <ViewHeadlineIcon />
                </Icon>
              </Button> */}
              <NavigationDrawer_EN
                toFooterScrollAction={toFooterScrollAction}
              />
            </div>
          )}

          {/* )} */}
          {largeView && (
            <div className="navbar-navigation-item">
              <NextLink href="/" passHref>
                <Link>
                  <Typography className="small-text">Home</Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div className="navbar-navigation-item">
              <NextLink href="/privacy" passHref>
                <Link>
                  <Typography className="small-text">
                    {PrivacyText_EN}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )}
          {largeView && (
            <div className="navbar-navigation-item">
              {/* <NextLink href="" passHref> */}
              <Link
                onClick={() => {
                  toFooterScrollAction();
                }}
              >
                <Typography className="small-text">{contactUS_EN}</Typography>
              </Link>
              {/* </NextLink> */}
            </div>
          )}
          {/* {largeView && (
            <div>
              <PopupMenu_EN
                buttonText={printAndCopyTextEN}
                popperPlacement="bottom-start"
                menuItems={[
                  {
                    key: printAndCopyMenu1Key,
                    text: printAndCopyMenu1EN,
                    url: printAndCopyMenu1Link,
                  },
                  {
                    key: printAndCopyMenu2Key,
                    text: printAndCopyMenu2EN,
                    url: printAndCopyMenu2Link,
                  },
                  // {
                  //   key: printAndCopyMenu3Key,
                  //   text: printAndCopyMenu3EN,
                  //   url: printAndCopyMenu3Link,
                  // },
                  // {
                  //   key: printAndCopyMenu4Key,
                  //   text: printAndCopyMenu4EN,
                  //   url: printAndCopyMenu4Link,
                  // },
                  {
                    key: printAndCopyMenu5Key,
                    text: printAndCopyMenu5EN,
                    url: printAndCopyMenu5Link,
                  },
                  {
                    key: printAndCopyMenu6Key,
                    text: printAndCopyMenu6EN,
                    url: printAndCopyMenu6Link,
                  },
                  {
                    key: printAndCopyMenu7Key,
                    text: printAndCopyMenu7EN,
                    url: printAndCopyMenu7Link,
                  },
                ]}
              />
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <PopupMenu_EN
                buttonText={softwareSolutionsTextEN}
                popperPlacement="bottom-start"
                menuItems={[
                  {
                    key: softwareSolutionsMenu1Key,
                    text: softwareSolutionsMenu1EN,
                    url: softwareSolutionsMenu1Link,
                  },
                  {
                    key: softwareSolutionsMenu2Key,
                    text: softwareSolutionsMenu2EN,
                    url: softwareSolutionsMenu2Link,
                  },
                  {
                    key: softwareSolutionsMenu3Key,
                    text: softwareSolutionsMenu3EN,
                    url: softwareSolutionsMenu3Link,
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
                    {officeEquipmentTextEN}
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
                    {officeSuppliesTextEN}
                  </Typography>
                </Link>
              </NextLink>
            </div>
          )} */}
          {/* {largeView && (
            <div>
              <PopupMenu_EN
                buttonText={servicesTextEN}
                popperPlacement="bottom-end"
                menuItems={[
                  {
                    key: servicesMenu1Key,
                    text: servicesMenu1EN,
                    // url: printAndCopyMenu1Link,
                  },
                  {
                    key: servicesMenu2Key,
                    text: servicesMenu2EN,
                  },
                  {
                    key: servicesMenu3Key,
                    text: servicesMenu3EN,
                  },
                  {
                    key: servicesMenu4Key,
                    text: servicesMenu4EN,
                  },
                  {
                    key: servicesMenu5Key,
                    text: servicesMenu5EN,
                  },
                  {
                    key: servicesMenu6Key,
                    text: servicesMenu6EN,
                  },
                  {
                    key: servicesMenu7Key,
                    text: servicesMenu7EN,
                  },
                  {
                    key: servicesMenu8Key,
                    text: servicesMenu8EN,
                  },
                  {
                    key: servicesMenu9Key,
                    text: servicesMenu9EN,
                  },
                ]}
              />
            </div>
          )} */}
        </div>
      </div>
      {/* </Toolbar> */}
    </AppBar>
  );
}
