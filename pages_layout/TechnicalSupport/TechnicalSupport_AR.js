import { Typography, Divider } from '@mui/material';
import React from 'react'
import Article1 from '../../components/Article1/Article1'
import Article1_AR from '../../components/Article1/Article1_AR';
import LinkComponent_AR from '../../components/LinkComponent/LinkComponent_AR';
import LinkComponent_EN from '../../components/LinkComponent/LinkComponent_EN';
import { light_beige, purple_1, grey_3, grey_2, grey_1, grey_4, dark_grey, paper_1_color, white_1 } from '../../public/colors'

export default function TechnicalSupport_AR() {
  const technicalSupportPageTitle = 'الدعم الفني';
  const technicalSupportParagraphs = [
    {
      heading: 'هل تحتاج إلى دعم فني فوري؟',
      text: 'يدعمك فنيو الخدمة المدربون من الاثنين إلى الجمعة من الساعة 7.30 صباحًا حتى الساعة 5 مساءً بكفاءة وموثوقية شخصيًا ، على الهاتف وعبر برنامج TeamViewer',
      imgURL: null,
    },
  ];
  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText = 'discriptive image';
  const link1Title = 'Ricoh تحميل برامج التعريفات لأجهزة';
  const link1Description = 'كل ما تحتاجه لتنزيل منتجات Ricoh وتحديثات البرامج والأدلة والمزيد';
  const link1ButtonText = 'انتقل إلى التنزيلات'
  const imageURL2 = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText2 = 'discriptive image 2';
  const linkTitle2 = 'Teamview تحميل برامج';
  const linkDescription2 = 'حتى يتمكن الفنيون لدينا من دعمك عبر الإنترنت ، يرجى تحميل إصدار برنامج Teamviewer على جهاز الكمبيوتر الخاص بك';
  const linkButtonText2 = 'التحميل الان'
  return (
    <div className="analysis-and-advice-main-div">
      <Article1_AR
        articleTitle={technicalSupportPageTitle} articleParagraphs={technicalSupportParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      <LinkComponent_AR
        imageURL={imageURL}
        imageAltText={imageAltText}
        title={link1Title}
        description={link1Description}
        sectionBackgroundColor={light_beige}
        buttonText={link1ButtonText}
        buttonColor={grey_1}
        buttonTextColor={paper_1_color}
      />
      <div style={{ width: '100%', marginTop: '0vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      <LinkComponent_AR
        imageURL={imageURL2}
        imageAltText={imageAltText2}
        title={linkTitle2}
        description={linkDescription2}
        buttonText={linkButtonText2}
        sectionBackgroundColor={dark_grey}
        buttonColor={paper_1_color}
        buttonTextColor={dark_grey}
        titleColor={paper_1_color}
        descriptionColor={paper_1_color}
        cardColor={dark_grey}
      />
    </div >
  )
}
