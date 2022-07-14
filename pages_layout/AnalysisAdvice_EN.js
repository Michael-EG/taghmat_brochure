import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Divider } from '@material-ui/core';
import Article1 from '../components/Article1/Article1';
import Article2_EN from '../components/Article2/Article2_EN';
import Article3_EN from '../components/Article3/Article3_EN';

export default function AnalysisAdvice_EN() {
  const articleTitle_1 = 'Infrastructure Analysis';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  const articleParagraphs_1 = [
    {
      heading: 'Why IT infrastructure is important?',
      text: 'Technology powers nearly every aspect of today’s businesses, from an individual employee’s work to operations to goods and services. When properly networked, technology can be optimized to improve communication, create efficiencies and increase productivity.',
      imgURL: null,
    },
    {
      heading: null,
      text: 'If an IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market. Alternatively, if an IT infrastructure isn’t properly implemented, businesses can face connectivity, productivity and security issues—like system disruptions and breaches. Overall, having a properly implemented infrastructure can be a factor in whether a business is profitable or not.',
      imgURL: null,
    },
    {
      heading: 'Why do I need to look at my print infrastructure?',
      text: 'The office printer isn’t just the device in the corner any more. While copying and faxing have become less common, document scanning and sharing are now vital components in keeping business moving. As such, the printer needs to be integrated into the wider network of devices and platforms that people use, and this can sometimes be overlooked.',
      imgURL: null,
    },
    {
      heading: 'Looking to improve print infrastructure for your company?',
      imgURL: null,
      text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
    },
  ];
  const articleTitle_2 = 'Optimizing resources';
  const articleParagraphs_2 = [
    {
      heading:
        'Managing your print infrastructure to be secure and efficient for the future',
      text: 'Is your company seeking to reduce its printing and related costs, roll out digitisation throughout the workplace, improve efficiency and ensure your employees can print and copy without limitation – even if a printer is unavailable? Or maybe you want a comprehensive overview and control of the print environment, securing that environment and eliminating unauthorised access to confidential documents and sensitive information? With us we will analyse together how to optimize the available resources to minimize down time or costs.',
      imgURL: null,
    },
    {
      heading:
        'So how can I better manage my print infrastructure to support business growth?',
      imgURL: null,
      text: 'Having discrete, disconnected printers from a number of suppliers increases costs, security issues and business efficiency. Often, businesses don’t appreciate how many printers they’re running and the effect of this. In the first instance, a print fleet audit establishes what equipment you have and where. It’s the first step in putting together an integrated print infrastructure that can be proactively managed. This enables you to make tangible process improvements that increase accountability and control.',
    },

    // {
    //   heading: null,
    //   text: 'If an IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market. Alternatively, if an IT infrastructure isn’t properly implemented, businesses can face connectivity, productivity and security issues—like system disruptions and breaches. Overall, having a properly implemented infrastructure can be a factor in whether a business is profitable or not.',
    //   imgURL: null,
    // },
  ];
  const analysisArticleTitle = 'Analysis & Advice';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  const analysisArticleParagraphs = [
    {
      heading: 'Do you want to improve something in your company in the long term?',
      text: 'First we need to know the initial situation. We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.',
      imgURL: null,
    },
  ];
  const analysisBulletParagraph = [
    {
      heading: 'Looking to improve print infrastructure for your company?',
      // imgURL: null,
      text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      listTitle: 'This is a bullet list title:',
      listItems: ['Items 1', 'Items2'],
    },
  ]

  return (
    <div className="analysis-and-advice-main-div">
      <Article1
        articleTitle={analysisArticleTitle}
        // articleSecondaryTitle={articleSecondaryTitle_2}
        articleParagraphs={analysisArticleParagraphs}
      />
      {/* <Article3_EN
        articleTitle={analysisArticleTitle}
        articleParagraphs={analysisBulletParagraph}
      // paperColor={light_beige}
      /> */}
      {/* <Article2_EN
        articleTitle={analysisArticleTitle}
        articleParagraphs={analysisBulletParagraph}
      // paperColor={light_beige}
      /> */}
      {/* <Article1
        articleTitle={articleTitle_2}
        articleParagraphs={articleParagraphs_2}
      /> */}
      {/* <div
        style={{
          width: '100%',
          height: '7vh',
          minHeight: '20px',
          backgroundColor: 'transparent',
        }}
      ></div> */}
    </div>
  );
}
