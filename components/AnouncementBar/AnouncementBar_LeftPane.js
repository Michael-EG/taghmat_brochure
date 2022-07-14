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
import { Store } from '../../utils/store';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';
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
  leftPaneTextEN,
} from './AnouncementBar_text';

export default function AnouncementBar_LeftPane() {
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
        className="anouncementBar__LeftPane"
        // justifyContent="flex-start"
        // alignItems="flex-end"
      >
        <Grid container direction="column" xs={2}>
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
                {storeTextAR}
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
                        {/* <Grid direction="column" justifyContent="flex-end"> */}
                        <MenuItem
                          onClick={handleClose}
                          className="anouncementBar__MenuList"
                        >
                          <Typography className="small-text">
                            {stationatryStoreTextAR}
                          </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={handleClose}
                          className="anouncementBar__MenuList"
                        >
                          <Typography className="small-text">
                            {devicesStoreTextAR}
                          </Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem
                          onClick={handleClose}
                          // style={{ background: 'yellow' }}
                          className="anouncementBar__MenuList"
                        >
                          <Typography variant="inherit" className="small-text">
                            {premiumStoreTextAR}
                          </Typography>
                        </MenuItem>
                        {/* </Grid> */}
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
                {careerTextAr}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid container direction="column" xs={2}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className="anouncementBar__Text">
                {aboutUsTextAR}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
        <Grid container direction="column" xs={2}>
          <NextLink href="/" passHref>
            <Link>
              <Typography className="anouncementBar__Text">
                {contactUSTextAR}
              </Typography>
            </Link>
          </NextLink>
        </Grid>
      </Grid>
    );
  }
  if (language === 'EN') {
    return (
      <Grid
        container
        direction="row"
        className="anouncementBar__LeftPane"
        // justifyContent="flex-start"
        // alignItems="flex-end"
      >
        <Typography className="anouncementBar__Text_NoHover">
          {leftPaneTextEN}
        </Typography>
        &nbsp;
        <NextLink href="/" passHref>
          <Link>
            <Typography className="anouncementBar__Text">
              {mobileNumberText}
            </Typography>
          </Link>
        </NextLink>
        &nbsp;
        <Typography className="anouncementBar__Text">{'|'}</Typography>
        &nbsp;
        <NextLink href="/" passHref>
          <Link>
            <Typography className="anouncementBar__Text">
              {emailText}
            </Typography>
          </Link>
        </NextLink>
        <div style={{ width: '3vw' }}></div>
        <Link onClick={changeLanguage}>
          <Typography className="anouncementBar__Text">عربي</Typography>
        </Link>
      </Grid>
    );
  }
  return <div></div>;
}
