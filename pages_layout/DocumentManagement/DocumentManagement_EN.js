import React from 'react'
import Article1 from '../../components/Article1/Article1'

export default function DocumentManagement_EN() {
  const documentSolutionArticleTitle = 'Document management';
  const documentSolutionArticleParagraphs = [
    {
      heading: 'Why do i need a document management software?',
      text: 'Put an end to numerous and confusing paper trays. With installed document solution software you can easily scan, file and manage all your documents. Nothing is lost and business processes are optimized.',
    },
    {
      heading: 'Why Al-Nour Association?',
      text: 'Al-Nour Association is one of few companies in Egypt to provide fully integrated solution, custom built for you individually using different tools. For customers, this means the certainty that their specialist dealer is characterized by special commitment and a high level of competence. In recent years, Al-Nour Association has been able to win well-known companies as satisfied customers for DMS/ECM solutions. In order to take this development into account, investments are made in ongoing training.',
    },
    {
      heading: 'Our commitment',
      text: 'Al-Nour Association will help you with all questions about the different document solution softwares. You can expect competent advice, as well as support and integration of the software in your company. Of course, our competent support team is at your disposal throughout the entire term.'
    },
    {
      heading: 'For optimal advice and for further information, we would be happy to talk to you personally.'
    }
  ];
  return (
    <div>
      {/* <div className="analysis-and-advice-main-div"> */}
      <Article1 articleTitle={documentSolutionArticleTitle} articleParagraphs={documentSolutionArticleParagraphs} />
      {/* <p>Document Management EN</p> */}
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        {/* <Divider /> */}
      </div>
    </div>
  )
}
