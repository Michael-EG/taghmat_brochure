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
import GridLinks_AR from '../../components/GridLinks/GridLinks_AR';
import Article2_AR from '../../components/Article2/Article2_AR';
import LinkComponent_AR from '../../components/LinkComponent/LinkComponent_AR';
import { logo_url } from '../../constants/keys';

export default function Home_AR() {
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
  const gridTitle = 'خدماتنا';
  const gridItemBackground = white_1;
  const gridItemBackgroundHover = dark_grey;
  const gridTextColor = grey_2;
  const gridTextColorHover = white_1;
  const gridMainDivColor =
    'linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)';
  const gridTitleColor = grey_2;
  const gridComponents = [
    {
      listTitle: 'طباعة ونسخ',
      listIems: [
        '.الطباعة والنسخ والفاكس والمسح الضوئي',
        '.حل مخصص لشركتك',
        '.نحن نتكيف مع متطلباتك',
      ],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'إدارة الوثائق',
      listIems: [
        '.حلول برامج إدارة المستندات الفعالة لسير العمل الخاص بك',
        '.تقليل استهلاك الورق والطاقة',
        '.تحكم كامل في مستنداتك الرقمية والمطبوعة',
      ],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'معدات المكتب',
      listIems: [
        '.حلول مكتبية مريحة مدروسة بالكامل',
        '.المكاتب التنفيذية وقاعات الاجتماعات أو المنتجات الفردية',
        '.احتياجات مكتبية مجهزة تجهيزا كاملا',
      ],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'اللوازم المكتبية',
      listIems: [
        '.اعثر على جميع اللوازم المكتبية الخاصة بك في مكان واحد',
        '.تمزيق المستندات والملحقات والمواد الاستهلاكية',
      ],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'خدمة الصيانة',
      listIems: [
        '.الخدمة هي أولويتنا القصوى',
        '.نحن نتميز بالتوافر الشخصي والموثوقية',
      ],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    // {
    //   listTitle: 'Distributed Printing:',
    //   listIems: ['Users can collect their print jobs from any device in the network', 'Send print jobs via e-mail from any device (notebook, PDA, mobile phone) as a PDF attachment to the MFP'],
    //   url: null,
    //   // gridBackground: '',
    //   // textColor: '',
    // },
    // {
    //   listTitle: 'Print2me:',
    //   listIems: ['Output of print jobs only after authentication of the user', 'Print jobs can be selected directly on the printer', 'Save costs by deleting or correcting jobs'],
    //   url: null,
    //   // gridBackground: '',
    //   // textColor: '',
    // },
    // {
    //   listTitle: 'OCR text recognition:',
    //   listIems: ['Convert the scanned document into different document formats, such as PDF, Word and many more', 'Editable and searchable files'],
    //   url: null,
    //   // gridBackground: '',
    //   // textColor: '',
    // },
    // {
    //   listTitle: 'We would be happy to advise you comprehensively!',
    //   listIems: null,
    //   url: null,
    //   // gridBackground: '',
    //   // textColor: '',
    // }
  ];
  const articleImageURL =
    'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const alnourLogoImageURL = logo_url;
  const officePrinterTitle = 'لماذا مؤسسة النور؟';
  // const officePrintersParagraphs = ["Office printers adapt to very different requirements. Use this printer for a small office to an open plan office or even production environments.", "Hallmarks of office printers are their high speed, high print quality and low running costs.", "We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.", "We also accompany you from the consultation to the installation and setup of the printer. Of course, you will receive precise and understandable training from us so that you can use the full potential of the printer."];
  const officePrintersParagraphs2 = [
    {
      isBullet: false,
      heading: 'تخصص',
      text: '.نحن شريكك الإقليمي المتميز للحلول المكتبية الفردية ومتجر الويب للترفيه المكتبي ، وفريقنا موجود من أجلك بمعرفة متميزة',
    },
    {
      isBullet: false,
      // heading:
      text: '.يعد تنفيذ العملية وخفض التكلفة والنطاق الكامل جزءًا من حلنا "الشامل" للتعاون الموجه نحو المستقبل مع شركتك. هذا ما ندافع عنه مع شركائنا الأقوياء',
    },
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      // listTitle: 'We provide wide range of products and services to fit all your company\'s workflow',
      listItems: [
        'حلول الأجهزة',
        'حلول البرمجيات',
        'معدات المكتب',
        'اللوازم المكتبية',
        'الصيانة عن بعد',
        '48 ساعة للصيانة',
        'مستهلكات',
        'التدريب والدعم',
      ],
    },
    {
      isBullet: false,
      heading: 'مؤسسة النور التجارية',
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
  const linkTitle2 = 'طابعات وآلات تصوير';
  const linkDescription2 =
    '.اعرف المزيد عن الأنظمة المتاحة. واكتشف الأجهزة التي تناسب متطلبات مكتبك بشكل أفضل';
  const linkButtonText2 = 'عرض الصفحة';
  // const linkTitle2 = 'Software solutions';
  const linkTitle3 = 'حلول البرمجيات';
  const linkDescription3 =
    '.إدارة الوثائق ، إدارة الأجهزة ، إدارة الأصول والتتبع';
  const linkButtonText3 = 'عرض الصفحة';
  const handleResize = () => {
    console.log('home page size');
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
    // console.log('hi', window.innerWidth);
    window.addEventListener('resize', handleResize);
    // return () => window.removeEventListener("resize", handleResize);
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
      <GridLinks_AR
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
        <Article2_AR
          articleTitle={officePrinterTitle}
          articleImage={alnourLogoImageURL}
          articleImageAltText="triumph adler printer"
          articleParagraphs={officePrintersParagraphs2}
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
      <LinkComponent_AR
        // imageURL={imageURL}
        // imageAltText={imageAltText}
        title={linkTitle3}
        description={linkDescription3}
        sectionBackgroundColor={light_beige}
        buttonText={linkButtonText3}
        buttonColor={grey_1}
        buttonTextColor={paper_1_color}
      />
      <LinkComponent_AR
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
