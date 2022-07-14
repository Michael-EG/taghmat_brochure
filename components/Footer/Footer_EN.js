import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { careerTextEN } from '../AnouncementBar/AnouncementBar_text';
import {
  officeEquipmentTextEN,
  officeSuppliesTextEN,
  printAndCopyTextEN,
  servicesMenu2EN,
  servicesMenu5EN,
  servicesMenu6EN,
  servicesMenu7EN,
  servicesTextEN,
  softwareSolutionsTextEN,
} from '../Navbar/Navbar_text';

export default function Footer_EN({ footer_ref }) {
  const current = new Date();
  const [largeView, setLargeView] = useState(false);
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
  // }, []);
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={footer_ref}>
      <div className={largeView ? 'footer-main-div' : 'footer-main-div-mobile'}>
        <div className={largeView ? 'footer-col1' : 'footer-col1-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Taghmat Malaika
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Our target is to Draw a smile on all kids faces Our priorities are
            special needs kids, orphans, children hospitals cancer and heart and
            poor children
          </Typography>
        </div>
        <div className={largeView ? 'footer-col2' : 'footer-col2-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Contact
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Taghmat Malaika Family
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            1 Taha Hussein Axis, Al-Nozha Al-Gdida, Cairo, Egypt
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            +20200005550
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            +201022200059
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            info@taghmat.com
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            www.taghmat.com
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Opening Times:
            <br />
            Saturday to Thursday
            <br />
            9:00 AM to 5:00 PM
          </Typography> */}
          {/* <Typography className="footer-column-body-text">
          Saturday to Thursday
        </Typography>
        <Typography className="footer-column-body-text">
          9:00 AM to 5:00 PM
        </Typography> */}
        </div>
        <div className={largeView ? 'footer-col3' : 'footer-col3-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Important
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Sign up for newsletter
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {printAndCopyTextEN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {softwareSolutionsTextEN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {officeEquipmentTextEN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {officeSuppliesTextEN}
          </Typography> */}
          {/* <Typography>{servicesTextEN}</Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {careerTextEN}
          </Typography> */}
        </div>
        <div className={largeView ? 'footer-col4' : 'footer-col4-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text'
                : 'footer-column-title-text-mobile'
            }
          >
            Help
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Conditions
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Imprint
          </Typography> */}
          <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            Privacy
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesTextEN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu2EN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu5EN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu6EN}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text'
                : 'footer-column-body-text-mobile'
            }
          >
            {servicesMenu7EN}
          </Typography> */}
        </div>
        {/* <p>This is footer</p> */}
      </div>
      <div className="footer-copyright-main-div">
        <Typography className="footer-copyright-text">
          © Copyright 2015 - {current.getFullYear()} | by Taghmat Malaika Family
          | All rights reserved
        </Typography>
      </div>
    </div>
  );
}
