import {
  AppBar,
  Badge,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  Link,
  Menu,
  MenuItem,
  Switch,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../utils/store';
import useStyles from '../utils/styles';
import AnouncementBar from './AnouncementBar/AnouncementBar';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function Layout({ children, title, description }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo, requestInfo, language } = state;
  // const { state, dispatch } = useContext(Store);
  // const { language } = state;
  const footerRef = useRef(null);
  const executeScroll = () => {
    console.log('scrolling');
    footerRef.current.scrollIntoView();
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
        fontFamily: 'Fira Sans Condensed, sans-serif',
        // color: '#404040',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1363DF',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
    const newDarkMode = !darkMode;
    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleDropDownOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDropDownClose = (e, redirect) => {
    setAnchorEl(null);
    if (redirect) {
      router.push(redirect);
    }
  };
  const handleLogoutClick = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT_REQUEST' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
  };
  // useEffect(() => {
  //   console.log('Loading state ==> ', requestInfo.loading);
  //   console.log('Language => ', language);
  // }, [requestInfo.loading, language]);
  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} | ${
                language === 'EN' ? 'Taghmat Family' : 'طغمات الملائكة'
              }`
            : `${language === 'EN' ? 'Taghmat Family' : 'طغمات الملائكة'}`}
        </title>
        {title && <meta name="title" content={title}></meta>}
        <meta name="robots" content="all" />
        {description && (
          <meta name="description" content={description} key="desc"></meta>
        )}
        <meta property="og:title" content={title || 'Taghmat Family'}></meta>
        {description && (
          <meta
            property="og:description"
            // Your competent partner for all your office requirement. Printers, copiers, Multifunction devices, software solutions, technical support, maintenace.
            content={description}
          />
        )}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <AnouncementBar /> */}
        <Divider />
        <Navbar toFooterScrollAction={executeScroll} />
        {/* <div className={}></div> */}
        <div className={classes.main}>{children}</div>
        <footer className={classes.footer}>
          <Footer footer_ref={footerRef} />
          {/* <Typography>All Rights Reserved.</Typography> */}
        </footer>
      </ThemeProvider>
    </div>
  );
}
