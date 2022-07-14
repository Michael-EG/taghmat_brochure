import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GridLinks_EN from '../../components/GridLinks/GrindLinks_EN';
import {
  paper_1_color,
  dark_grey,
  light_beige,
  light_blue,
  medium_blue,
  medium_purple,
  very_light_red,
  grey_1,
  grey_2,
  grey_3,
  purple_1,
  white_1,
} from '../../public/colors';
import { Divider } from '@mui/material';
import Article2_EN from '../../components/Article2/Article2_EN';
import LinkComponent_EN from '../../components/LinkComponent/LinkComponent_EN';
import { logo_url } from '../../constants/keys';

export default function Home_EN() {
  const mainImageURL =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/alnour_images%2Foffice1.jpeg?alt=media&token=60f6278c-a86c-40fa-9781-7c21a84da808';
  const mainImageURL2 =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/alnour_images%2Foffice2.jpg?alt=media&token=cf518763-f194-4c14-a662-03d637887733';
  const mainImageURL3 =
    'https://firebasestorage.googleapis.com/v0/b/be-happy-app-83187.appspot.com/o/meta_images%2Ftaghmat1.jpg?alt=media&token=114a2ba3-88f9-4d60-821e-541ffe0c186f';

  const mainImageAltText = 'home office interior image';
  const [largeView, setLargeView] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const gridTitle = 'What are our activities?';
  const gridItemBackground = white_1;
  const gridItemBackgroundHover = dark_grey;
  const gridTextColor = grey_2;
  const gridTextColorHover = white_1;
  const gridMainDivColor =
    'linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)';
  const gridTitleColor = grey_2;
  const gridComponents = [
    {
      listTitle: 'Taghmat Malaika',
      url: null,
    },
    {
      listTitle: 'Taghmat Kids',
      url: null,
    },
  ];
  const articleImageURL =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const alnourLogoImageURL = logo_url;
  const officePrinterTitle = "That's why Al-Nour Association";
  // const officePrintersParagraphs = ["Office printers adapt to very different requirements. Use this printer for a small office to an open plan office or even production environments.", "Hallmarks of office printers are their high speed, high print quality and low running costs.", "We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.", "We also accompany you from the consultation to the installation and setup of the printer. Of course, you will receive precise and understandable training from us so that you can use the full potential of the printer."];
  const officePrintersParagraphs2 = [
    {
      isBullet: false,
      heading: 'Competence',
      text: 'As your regional premium partner for individual office solutions and national web shop for office entertainment, our team is there for you with outstanding know-how.',
    },
    {
      isBullet: false,
      // heading:
      text: 'Process implementation, cost reduction and a complete range are part of our "all-inclusive" solution for future-oriented cooperation with your company. This is what we stand for together with our strong partners.',
    },
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      // listTitle: 'We provide wide range of products and services to fit all your company\'s workflow',
      listItems: [
        'Hardware solutions.',
        'Software solutions.',
        'Office equipment.',
        'Office Supplies.',
        'Remote maintenance',
        '48-h report to maintenance.',
        'Consumables',
        'Training and support.',
      ],
    },
    {
      isBullet: false,
      heading: 'Al-Nour Association',
    },
  ];
  const imageURL =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText = 'discriptive image';
  const link1Title = 'Ricoh driver downloads';
  const link1Description =
    'Everything you need to download Ricoh products, software updates, manuals and more.';
  const link1ButtonText = 'Go to downloads';
  const imageURL2 =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText2 = 'discriptive image 2';
  const linkTitle2 = 'Privacy policy';
  const linkDescription2 = 'Know more about Taghmat Al-Malaika privacy policy.';
  const linkButtonText2 = 'View';
  // const linkTitle2 = 'Software solutions';
  const linkTitle3 = 'Contact us';
  const linkDescription3 = 'We are happy to answer all your questions.';
  const linkButtonText3 = 'View';

  const tArticle1_title = 'Who is Taghmat Malaika?';
  const tArticle1_paragraphs = [
    {
      isBullet: false,
      heading: 'Our Mission',
      text: 'Our target is to Draw a smile on all kids faces Our priorities are special needs kids, orphans, children hospitals cancer and heart and poor children.',
    },
    {
      isBullet: false,
      heading: 'Special-abled kids.',
      text: 'Open day with pool time and various outdoor activities. Different educational and fun shows.',
    },
    {
      isBullet: false,
      heading: 'Fun days for refugees.',
      text: 'Open day with pool time and various outdoor activities. Different educational and fun shows.',
    },
    {
      isBullet: false,
      heading: 'Impoverished families.',
      text: 'Open day with pool time and various outdoor activities. Different educational and fun shows.',
    },
    {
      isBullet: false,
      heading: 'Taghmat Al-Malaika',
    },
  ];
  const handleResize = () => {
    // console.log('home page size');
    // console.log(window.innerWidth);
    if (
      typeof window !== 'undefined' &&
      window.innerWidth !== windowSize.width
    ) {
      // Handler to call on window resize
      // function handleResize() {
      // Set window width/height to state
      if (window.innerWidth < 960) {
        setLargeView(false);
      } else {
        setLargeView(true);
      }
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // console.log(windowSize);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home-page-main-div">
      <div className="home-page-main-image-div">
        <Image
          src={mainImageURL3}
          alt={mainImageAltText}
          layout="intrinsic"
          height={0.45 * windowSize.width || 100}
          width={0.87 * windowSize.width || 100}
        />
      </div>
      <div
        style={{
          width: '100%',
          marginTop: '12vh',
          marginBottom: '0',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <Divider />
      </div>
      {/* <Article2_EN articleImage={} /> */}
      <GridLinks_EN
        gridTitle={gridTitle}
        gridComponents={gridComponents}
        gridMainDivColor={gridMainDivColor}
        gridItemBackground={gridItemBackground}
        gridTextColor={gridTextColor}
        gridTitleColor={gridTitleColor}
        gridItemBackgroundHover={gridItemBackgroundHover}
        gridTextColorHover={gridTextColorHover}
      />
      <div
        style={{
          width: '100%',
          marginTop: '12vh',
          marginBottom: '0',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <Divider />
      </div>
      <div>
        <Article2_EN
          articleTitle={tArticle1_title}
          articleImage={alnourLogoImageURL}
          articleImageAltText="Taghmat logo big"
          articleParagraphs={tArticle1_paragraphs}
        />
      </div>
      <div
        style={{
          width: '100%',
          marginTop: '6vh',
          marginBottom: '6vh',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        {/* <Divider /> */}
      </div>
      <LinkComponent_EN
        // imageURL={imageURL}
        // imageAltText={imageAltText}
        title={linkTitle3}
        description={linkDescription3}
        sectionBackgroundColor={light_beige}
        buttonText={linkButtonText3}
        buttonColor={grey_1}
        buttonTextColor={paper_1_color}
      />
      <LinkComponent_EN
        // imageURL={imageURL2}
        // imageAltText={imageAltText2}
        title={linkTitle2}
        description={linkDescription2}
        // sectionBackgroundColor={light_beige}
        buttonText={linkButtonText2}
        sectionBackgroundColor={dark_grey}
        buttonColor={paper_1_color}
        buttonTextColor={dark_grey}
        titleColor={paper_1_color}
        descriptionColor={paper_1_color}
        cardColor={dark_grey}
      />

      <div
        style={{
          width: '100%',
          marginTop: '12vh',
          marginBottom: '0',
          marginLeft: '10%',
          marginRight: '10%',
        }}
      >
        <Divider />
      </div>
    </div>
  );
}
