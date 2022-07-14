// import React from 'react';
import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import {
  ClickAwayListener,
  Divider,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import useStyles from '../../utils/styles';
import NextLink from 'next/link';

export default function PopupMenu_AR({
  menuItems,
  buttonText,
  popperPlacement,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    // console.log('closing');
    // setAnchorRef(null)
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

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
  return (
    <div
      onMouseLeave={handleClose}
    //   onMouseOut={handleClose}
    //   style={{ background: 'red' }}
    >
      <Stack direction="row" spacing={2}>
        <Link
          onClick={handleToggle}
          onMouseOver={handleToggle}
          //   onMouseLeave={handleClose}
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
        >
          <Typography className="anouncementBar__Text">{buttonText}</Typography>
        </Link>
        <Popper
          className="on-top"
          //   onMouseLeave={handleClose}
          //   direction="rtl"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement={popperPlacement}
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
              {/* <div onMouseLeave={handleClose}> */}
              <Paper className="light-background">
                <ClickAwayListener
                  onClickAway={handleClose}
                // onMouseLeave={handleClose}
                >
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {menuItems.map((menuItem, index) => (
                      <div key={menuItem.key}>
                        <MenuItem
                          onClick={handleClose}
                          // className="anouncementBar__MenuList"
                          className="navbar-pop-up-menu-item-ar"
                        >
                          {/* <Link> */}
                          <NextLink href={menuItem.url || '/'} passHref>
                            <Link>
                              <Typography className="small-text">
                                {menuItem.text}
                              </Typography>
                            </Link>
                          </NextLink>
                          {/* </Link> */}
                        </MenuItem>
                        {index === menuItems.length - 1 ? null : <Divider />}
                        {/* <Divider /> */}
                      </div>
                    ))}
                    {/* <MenuItem
                      onClick={handleClose}
                      className="anouncementBar__MenuListEN"
                    >
                      <Typography className="small-text">
                        {printAndCopyMenu1EN}
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={handleClose}
                      className="anouncementBar__MenuListEN"
                    >
                      <Typography className="small-text">
                        {printAndCopyMenu2EN}
                      </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem
                      onClick={handleClose}
                      className="anouncementBar__MenuListEN"
                    >
                      <Typography className="small-text">
                        {printAndCopyMenu3EN}
                      </Typography>
                    </MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
              {/* </div> */}
            </Grow>
          )}
        </Popper>
      </Stack>
    </div>
  );
}
