import { Typography, Divider } from '@mui/material';
import React from 'react'
import Article1 from '../../components/Article1/Article1'
import LinkComponent_EN from '../../components/LinkComponent/LinkComponent_EN';
import { light_beige, purple_1, grey_3, grey_2, grey_1, grey_4, dark_grey, paper_1_color, white_1 } from '../../public/colors'

export default function TechnicalSupport_EN() {
  const technicalSupportPageTitle = 'Technical Support';
  const technicalSupportParagraphs = [
    {
      heading: 'Do you need imediate technical support?',
      text: 'Trained service technicians support you from Monday to Friday from 7.30 a.m. to 5 p.m. competently and reliably personally, on the phone and via Teamviewer.',
      imgURL: null,
    },
  ];
  const imageURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText = 'discriptive image';
  const link1Title = 'Ricoh driver downloads';
  const link1Description = 'Everything you need to download Ricoh products, software updates, manuals and more.';
  const link1ButtonText = 'Go to downloads'
  const imageURL2 = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  const imageAltText2 = 'discriptive image 2';
  const linkTitle2 = 'Teamview download';
  const linkDescription2 = 'So that our technicians can support you online, please load our Teamviewer version onto your PC.';
  const linkButtonText2 = 'Download now'
  return (
    <div className="analysis-and-advice-main-div">
      <Article1
        articleTitle={technicalSupportPageTitle} articleParagraphs={technicalSupportParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      <LinkComponent_EN
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
      <LinkComponent_EN
        imageURL={imageURL2}
        imageAltText={imageAltText2}
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
    </div >
  )
}
