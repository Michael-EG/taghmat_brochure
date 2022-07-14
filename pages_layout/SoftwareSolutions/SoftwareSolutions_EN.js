import { Divider } from '@mui/material';
import React from 'react';
import Article1 from '../../components/Article1/Article1';
import Article2_EN from '../../components/Article2/Article2_EN';
import Article3_EN from '../../components/Article3/Article3_EN';
import GridLinks_EN from '../../components/GridLinks/GrindLinks_EN';
import { paper_1_color, dark_grey, light_beige, light_blue, medium_blue, medium_purple, very_light_red, grey_1, grey_2, grey_3, purple_1, white_1 } from '../../public/colors'

export default function SoftwareSolutions_EN() {

  const softwareSolutionsTitle = "Software solutions";
  const softwareSolutionsParagraphs = [
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'Together with you and your team, we analyze the processing of your documents volume, identify weak points and potentially change it into your individual office solution.',
      imgURL: null,
    },
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'Save time and take control of your print environments with solutions that personalize your documents, automatically distribute them to multiple destinations, and protect your data.',
      imgURL: null,
    },
    {
      // heading: 'Do you want to improve something in your company in the long term?',
      text: 'Our experts will be happy to inform you in a personal on-site consultation or create an individual solution concept with you.',
      imgURL: null,
    },
  ];
  const gridTitle = 'Workflow Solutions: ';
  const gridItemBackground = white_1;
  const gridItemBackgroundHover = grey_2;
  const gridTextColor = grey_2;
  const gridTextColorHover = white_1;
  const gridMainDivColor = 'linear-gradient(180deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 100%)';
  const gridTitleColor = grey_2;
  const gridComponents = [
    {
      listTitle: 'Form printing:',
      listIems: ['Produce forms in-house', 'Print forms as needed', 'no waste due to necessary changes to forms', 'Print forms with the data'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'To scan:',
      listIems: ['Generation of full-text searchable PDF, JPEG, Word, Excel, OpenOffice or Tiff files', 'Scan to network folders or directly to archiving or workflow solutions', 'Scan to Sharepoint', 'Keywording of the scanned documents directly at the MFP', 'Send directly by email'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'Costs:',
      listIems: ['Analyze which devices are over- or under-utilized', 'Assign costs by department, cost center, project, client, etc.', 'Capture how and by whom printers and multifunction devices (MFP\'s) are used', 'Production of meaningful reports on device usage'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'Security:',
      listIems: ['Output of print jobs only after authentication of the user at the device via PIN or magnetic or proximity card', 'Automatic deletion of saved jobs after a defined period of time'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'Rule-based printing:',
      listIems: ['Which user may use certain functions on which device and to what extent (e.g. color prints and copies)'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'Distributed Printing:',
      listIems: ['Users can collect their print jobs from any device in the network', 'Send print jobs via e-mail from any device (notebook, PDA, mobile phone) as a PDF attachment to the MFP'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'Print2me:',
      listIems: ['Output of print jobs only after authentication of the user', 'Print jobs can be selected directly on the printer', 'Save costs by deleting or correcting jobs'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'OCR text recognition:',
      listIems: ['Convert the scanned document into different document formats, such as PDF, Word and many more', 'Editable and searchable files'],
      url: null,
      // gridBackground: '',
      // textColor: '',
    },
    {
      listTitle: 'We would be happy to advise you comprehensively!',
      listIems: null,
      url: null,
      // gridBackground: '',
      // textColor: '',
    }
  ]

  return (
    <div className="analysis-and-advice-main-div">
      <Article1 articleTitle={softwareSolutionsTitle} articleParagraphs={softwareSolutionsParagraphs} />
      {/* <Divider style={{ backgroundColor: 'black' }} /> */}
      {/* <div style={{ width: '100%' }}>
        <Divider />

      </div> */}
      {/* <br /> */}
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      {/* <Divider className="article1-article-body-divider" /> */}
      <GridLinks_EN gridTitle={gridTitle} gridComponents={gridComponents} gridMainDivColor={gridMainDivColor} gridItemBackground={gridItemBackground} gridTextColor={gridTextColor} gridTitleColor={gridTitleColor} gridItemBackgroundHover={gridItemBackgroundHover} gridTextColorHover={gridTextColorHover} />
    </div>
  );
}
