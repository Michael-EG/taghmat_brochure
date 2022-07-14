import { Divider } from '@mui/material';
import React from 'react'
import Article1 from '../../components/Article1/Article1';

export default function InfoPrintCopy_EN() {
  const paperArticleTitle = 'Paper';
  const paperArticleParagraphs = [
    {
      heading: 'Did you know that our systems have a longer service life with our special paper?',
      text: 'Ask for our special paper. We would be happy to advise you without obligation.',
    }
  ];
  const energyArticleTitle = 'Energy saving';
  const energyArticleParagraphs = [{
    heading: 'Did you also know that our systems work with induction heating?',
    text: 'This significantly reduces your energy costs and makes an important contribution to environmental protection.',
  }];
  return (
    <div>
      <Article1 articleTitle={paperArticleTitle} articleParagraphs={paperArticleParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      <Article1 articleTitle={energyArticleTitle} articleParagraphs={energyArticleParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        {/* <Divider /> */}
      </div>

    </div>
  )
}
