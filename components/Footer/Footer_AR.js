import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  careerTextAr,
  careerTextEN,
} from '../AnouncementBar/AnouncementBar_text';
import {
  officeEquipmentTextAR,
  officeEquipmentTextEN,
  officeSuppliesTextAR,
  officeSuppliesTextEN,
  printAndCopyTextAR,
  printAndCopyTextEN,
  servicesMenu2AR,
  servicesMenu2EN,
  servicesMenu5AR,
  servicesMenu5EN,
  servicesMenu6AR,
  servicesMenu6EN,
  servicesMenu7AR,
  servicesMenu7EN,
  servicesTextAR,
  servicesTextEN,
  softwareSolutionsTextAR,
  softwareSolutionsTextEN,
} from '../Navbar/Navbar_text';

export default function Footer_AR() {
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
    <div>
      <div
        className={
          largeView ? 'footer-main-div-ar' : 'footer-main-div-ar-mobile'
        }
      >
        <div className={largeView ? 'footer-col1-ar' : 'footer-col1-ar-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text-ar'
                : 'footer-column-title-text-ar-mobile'
            }
          >
            طغمات الملائكة
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            هدفنا هو رسم الابتسامه علي وشوش الاطفال كلهم بون اي تفرقه اولويتنا
            هم الاطفال ذي الاحتياجات الخاصه,الايتام,المستشفيات,و الفقراء من
            الصعيد للبحيره
            {/* Al-Nour Association is your competent partner with individual
            solutions for all areas of office organization. We create
            transparency, implement efficient processes together with you and
            reduce costs. This is what we stand for - together with our strong
            partners. */}
          </Typography>
        </div>
        <div className={largeView ? 'footer-col2-ar' : 'footer-col2-ar-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text-ar'
                : 'footer-column-title-text-ar-mobile'
            }
          >
            تواصل معنا
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            طغمات الملائكة
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            ١ محور طه حسين , النزهة الجديدة , القاهرة , مصر
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {/* +20226201250 */}
            +٢٠٢٢٠٢٢٠٢٥٠
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            +٢٠١٠٢٢٢٢٢٢٥٩
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            info@taghmat.com
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            www.taghmat.com
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            مواعيد العمل
            <br />
            من السبت الي الخميس
            <br />
            ٩:٠٠ صباحا حتى ٥:٠٠ مساء
          </Typography> */}
          {/* <Typography className="footer-column-body-text">
          Saturday to Thursday
        </Typography>
        <Typography className="footer-column-body-text">
          9:00 AM to 5:00 PM
        </Typography> */}
        </div>
        <div className={largeView ? 'footer-col3-ar' : 'footer-col3-ar-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text-ar'
                : 'footer-column-title-text-ar-mobile'
            }
          >
            معلومات تهمك
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            أشترك في أشعارات
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {printAndCopyTextAR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {softwareSolutionsTextAR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {officeEquipmentTextAR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {officeSuppliesTextAR}
          </Typography> */}
          {/* <Typography>{servicesTextEN}</Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {careerTextAr}
          </Typography> */}
        </div>
        <div className={largeView ? 'footer-col4-ar' : 'footer-col4-ar-mobile'}>
          <Typography
            className={
              largeView
                ? 'footer-column-title-text-ar'
                : 'footer-column-title-text-ar-mobile'
            }
          >
            مساعدة
          </Typography>
          <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            المواصفات و الشروط
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
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            الخصوصية
          </Typography>
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {servicesTextAR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {servicesMenu2AR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {servicesMenu5AR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {servicesMenu6AR}
          </Typography> */}
          {/* <Typography
            className={
              largeView
                ? 'footer-column-body-text-ar'
                : 'footer-column-body-text-ar-mobile'
            }
          >
            {servicesMenu7AR}
          </Typography> */}
        </div>
        {/* <p>This is footer</p> */}
      </div>
      <div className="footer-copyright-main-div">
        <Typography className="footer-copyright-text">
          {current.getFullYear()} | طغمات الملائكة ©
        </Typography>
      </div>
    </div>
  );
}
