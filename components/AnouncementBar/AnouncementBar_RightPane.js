import {
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import React, { useContext, useRef, useState } from 'react';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import {
  emailText,
  mobileNumberText,
  leftPaneTextAR,
  careerTextAr,
  aboutUsTextAR,
  contactUSTextAR,
  premiumStoreTextAR,
  devicesStoreTextAR,
  stationatryStoreTextAR,
  storeTextAR,
  storeTextEN,
  stationatryStoreTextEN,
  devicesStoreTextEN,
  premiumStoreTextEN,
  careerTextEN,
  aboutUsTextEN,
  contactUSTextEN,
} from './AnouncementBar_text';
import { Store } from '../../utils/store';

export default function AnouncementBar_RightPane() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  const [open, setOpen] = useState(false);
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
  const changeLanguage = (event) => {
    event.preventDefault();
    handleClose(event);
    if (language === 'EN') {
      dispatch({ type: 'SET_ARABIC' });
    }
    if (language === 'AR') {
      dispatch({ type: 'SET_ENGLISH' });
    }
  };

  if (language === 'AR') {
    return (
      <Grid
        container
        direction="row"
        className="anouncementBar__RightPaneAR"
        // justifyContent="flex-end"
        // alignItems="flex-end"
      >
        <Link onClick={changeLanguage}>
          <Typography className="anouncementBar__Text">English</Typography>
        </Link>
        <div style={{ width: '3vw' }}></div>
        <NextLink href="/" passHref>
          <Link>
            <Typography className="anouncementBar__Text">
              {emailText}
            </Typography>
          </Link>
        </NextLink>
        &nbsp;
        <Typography className="anouncementBar__Text">{'|'}</Typography>
        &nbsp;
        <NextLink href="/" passHref>
          <Link>
            <Typography className="anouncementBar__Text">
              {mobileNumberText}
            </Typography>
          </Link>
        </NextLink>
        &nbsp;
        <Typography className="anouncementBar__Text_NoHover">
          {leftPaneTextAR}
        </Typography>
        &nbsp;
        {/* <div style={{ width: '3vw' }}></div> */}
        {/* <NextLink href="/" passHref> */}
        {/* <Link onClick={changeLanguage}>
          <Typography className="anouncementBar__Text">English</Typography>
        </Link> */}
        {/* </NextLink> */}
      </Grid>
    );
  }
  if (language === 'EN') {
    return (
      <Grid
        container
        direction="row"
        className="anouncementBar__RightPaneAR"
        // justifyContent="flex-end"
        // alignItems="flex-end"
      >
        <Grid container direction="column" xs={3}>
          <Stack direction="row" spacing={2}>
            <Link
              onClick={handleToggle}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
            >
              <Typography className="anouncementBar__Text">
                {storeTextEN}
              </Typography>
            </Link>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === 'bottom-start' ? 'left top' : 'left bottom',
                  }}
                >
                  <Paper className="light-background">
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          onClick={handleClose}
                          className="anouncementBar__MenuListEN"
                        >
                          {/* {stationatryStoreTextEN} */}
                          <Typography className="small-text">
                            {stationatryStoreTextEN}
                          </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={handleClose}
                          className="anouncementBar__MenuListEN"
                        >
                          {/* {devicesStoreTextEN} */}
                          <Typography className="small-text">
                            {devicesStoreTextEN}
                          </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={handleClose}
                          className="anouncementBar__MenuListEN"
                        >
                          {/* {premiumStoreTextEN} */}
                          <Typography className="small-text">
                            {premiumStoreTextEN}
                          </Typography>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Stack>
        </Grid>
        <Grid container direction="column" xs={2}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className="anouncementBar__Text">
                {careerTextEN}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid container direction="column" xs={2}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className="anouncementBar__Text">
                {aboutUsTextEN}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid container direction="column" xs={2}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className="anouncementBar__Text">
                {contactUSTextEN}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    );
  }
  return <div></div>;
}
