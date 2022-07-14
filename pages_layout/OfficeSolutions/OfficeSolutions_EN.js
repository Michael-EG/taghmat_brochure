import React from 'react';
import Article2_EN from '../../components/Article2/Article2_EN';
import Article3_EN from '../../components/Article3/Article3_EN';
import { paper_1_color, dark_grey, light_beige, light_blue, medium_blue, medium_purple, very_light_red } from '../../public/colors'

export default function OfficeSolutions_EN() {
  // const articleTitle_1 = 'Infrastructure Analysis';
  const articleImageURL = 'https://firebasestorage.googleapis.com/v0/b/alnourtracker.appspot.com/o/images%2Fpp-ta-p-4030d-a-img-data.jpeg?alt=media&token=05ec7010-266b-4b05-b8e9-a14be15e188b';
  //   const articleSecondaryTitle_2 =
  //     'This is a bold text to be another title? shold be interesting';
  // const articleParagraphs_1 = [
  //   {
  //     heading: 'Why IT infrastructure is important?',
  //     text: 'Technology powers nearly every aspect of today’s businesses, from an individual employee’s work to operations to goods and services. When properly networked, technology can be optimized to improve communication, create efficiencies and increase productivity.',
  //   },
  //   {
  //     heading: null,
  //     text: 'If an IT infrastructure is flexible, reliable and secure, it can help an enterprise meet its goals and provide a competitive edge in the market. Alternatively, if an IT infrastructure isn’t properly implemented, businesses can face connectivity, productivity and security issues—like system disruptions and breaches. Overall, having a properly implemented infrastructure can be a factor in whether a business is profitable or not.',
  //   },
  //   {
  //     heading: 'Why do I need to look at my print infrastructure?',
  //     text: 'The office printer isn’t just the device in the corner any more. While copying and faxing have become less common, document scanning and sharing are now vital components in keeping business moving. As such, the printer needs to be integrated into the wider network of devices and platforms that people use, and this can sometimes be overlooked.',
  //   },
  //   {
  //     heading: 'Looking to improve print infrastructure for your company?',
  //     text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
  //     isBullet: true,
  //     listTitle: 'This is a bullet list title:',
  //     listItems: ['Items 1', 'Items2'],
  //   },
  // ];
  // const articleTitle_2 = 'Optimizing resources';
  // const articleParagraphs_2 = [
  //   {
  //     heading:
  //       'Managing your print infrastructure to be secure and efficient for the future',
  //     text: 'Is your company seeking to reduce its printing and related costs, roll out digitisation throughout the workplace, improve efficiency and ensure your employees can print and copy without limitation – even if a printer is unavailable? Or maybe you want a comprehensive overview and control of the print environment, securing that environment and eliminating unauthorised access to confidential documents and sensitive information? With us we will analyse together how to optimize the available resources to minimize down time or costs.',
  //     imgURL: null,
  //   },
  //   {
  //     heading:
  //       'So how can I better manage my print infrastructure to support business growth?',
  //     imgURL: null,
  //     text: 'Having discrete, disconnected printers from a number of suppliers increases costs, security issues and business efficiency. Often, businesses don’t appreciate how many printers they’re running and the effect of this. In the first instance, a print fleet audit establishes what equipment you have and where. It’s the first step in putting together an integrated print infrastructure that can be proactively managed. This enables you to make tangible process improvements that increase accountability and control.',
  //   },
  // ];
  const officeSolutionsTitle = "office solutions";
  const officeSolutoinsParagraphs = [
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      listTitle: 'We provide wide range of products and services to fit all your company\'s workflow',
      listItems: ['office systems', 'In a personal conversation we will find out together which printer is best for you and meets all your requirements.', 'Fleet management for automatic toner ordering, meter reading transmission, service requests', 'Combination of office systems and software components'],
    },
  ];
  const officePrinterTitle = "Office printers";
  // const officePrintersParagraphs = ["Office printers adapt to very different requirements. Use this printer for a small office to an open plan office or even production environments.", "Hallmarks of office printers are their high speed, high print quality and low running costs.", "We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.", "We also accompany you from the consultation to the installation and setup of the printer. Of course, you will receive precise and understandable training from us so that you can use the full potential of the printer."];
  const officePrintersParagraphs2 = [
    {
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.`,
      isBullet: true,
      // listTitle: 'We provide wide range of products and services to fit all your company\'s workflow',
      listItems: ['Office printers adapt to very different requirements. Use this printer for a small office to an open plan office or even production environments.', 'Hallmarks of office printers are their high speed, high print quality and low running costs.', 'We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.', 'We also accompany you from the consultation to the installation and setup of the printer. Of course, you will receive precise and understandable training from us so that you can use the full potential of the printer.'],
    },
  ];
  const multiFunctionTitle = "Multifunction systems";
  const multiFunctionParagraph = [
    {
      heading: 'Multifunction system (Copy, Print, Scan)',
      // heading: 'Looking to improve print infrastructure for your company?',
      // text: `Enjoy the benefits of a multifunction system. Whether as a single device or network printer, nothing is left to be desired. They are fast, productive and above all user-friendly. In addition, they deliver high-quality printing in cost-effective color printing. We will be happy to advise you and together we will find the ideal multifunction printer that meets your wishes and requirements.`,
      isBullet: true,
      listTitle: 'Multifunction system (Copy, Print, Scan)',
      listItems: ['Fast, productive and above all user-friendly.', 'Works as a single device or a network printer, We will be happy to advise you and together we will find the ideal office printer that meets your wishes and requirements.', 'High-quality printing and cost-effective.'],
    },
  ]

  return (
    <div className="analysis-and-advice-main-div">
      <Article2_EN
        articleTitle={officeSolutionsTitle}
        articleParagraphs={officeSolutoinsParagraphs}
      />
      <Article2_EN
        articleTitle={officePrinterTitle}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={officePrintersParagraphs2}
      />
      <Article3_EN articleTitle={multiFunctionTitle} articleImage={articleImageURL} articleImageAltText="triumph adler printer" articleParagraphs={multiFunctionParagraph}></Article3_EN>
      {/* <Article2_EN
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      /> */}
      {/* <Article3_EN
        articleTitle={articleTitle_1}
        articleImage={articleImageURL}
        articleImageAltText="triumph adler printer"
        articleParagraphs={articleParagraphs_1}
        paperColor={paper_1_color}
      /> */}
      {/* <Article3_EN
        articleTitle={articleTitle_2}
        articleParagraphs={articleParagraphs_2}
      /> */}
      {/* <Article2_EN
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
