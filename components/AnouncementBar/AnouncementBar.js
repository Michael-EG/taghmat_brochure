/* eslint-disable react-hooks/exhaustive-deps */
import {
  // Button,
  // ClickAwayListener,
  Grid,
  // Link,
  // MenuItem,
  // MenuList,
  // Paper,
  // Popper,
  // Typography,
  // Stack,
  // Grow,
} from '@material-ui/core';
// import Stack from '@mui/material/Stack';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../../utils/store';
// import NextLink from 'next/link';
// import {
//   emailText,
//   mobileNumberText,
//   leftPaneTextAR,
//   careerTextAr,
//   aboutUsTextAR,
//   contactUSTextAR,
//   premiumStoreTextAR,
//   devicesStoreTextAR,
//   stationatryStoreTextAR,
//   storeTextAR,
// } from './AnouncementBar_text';
import AnouncementBar_LeftPane from './AnouncementBar_LeftPane';
import AnouncementBar_RightPane from './AnouncementBar_RightPane';

export default function AnouncementBar() {
  // const { state, dispatch } = useContext(Store);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  // const { language } = state;

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <Grid
      direction="row"
      className="anouncementBar"
      container
      // spacing={10}
      // spacing={{ xs: 2 }}
      columns={{ xs: 1, md: 2 }}
    >
      <Grid direction="column" container xs={12} md={6} alignContent="center">
        <Grid direction="row" container alignContent="center" xs={12}>
          <Grid className="anouncementBar__Item" item xs={12} md={12}>
            <AnouncementBar_LeftPane />
            {/* {rightPane} */}
            {/* <Typography className="brand-text">Area 1</Typography> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid direction="column" container xs={12} md={6} alignContent="center">
        <Grid direction="row" container alignContent="center" xs={12}>
          <Grid className="anouncementBar__Item" item xs={12} md={12}>
            {/* {leftPane} */}
            <AnouncementBar_RightPane />
            {/* <Typography className="brand-text">Area 1</Typography> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
