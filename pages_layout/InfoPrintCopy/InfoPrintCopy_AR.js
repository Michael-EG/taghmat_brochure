import { Divider } from '@mui/material';
import React from 'react'
// import Article1 from '../../components/Article1/Article1';
import Article1_AR from '../../components/Article1/Article1_AR';

export default function InfoPrintCopy_AR() {
  const paperArticleTitle = 'الأوراق';
  const paperArticleParagraphs = [
    {
      heading: 'هل تعلم أن أنظمتنا تتمتع بعمر خدمة أطول مع ورقنا الخاص؟',
      text: '.اسأل عن الورق الذي نستخدمه. سنكون سعداء لتقديم المشورة لك دون التزام',
    }
  ];
  const energyArticleTitle = 'توفير الطاقة';
  const energyArticleParagraphs = [{
    heading: 'هل تعلم أيضًا أن أنظمتنا تعمل بالتسخين التعريفي؟',
    text: '.هذا يقلل بشكل كبير من تكاليف الطاقة الخاصة بك ويساهم بشكل كبير في حماية البيئة',
  }];
  return (
    <div>
      <Article1_AR articleTitle={paperArticleTitle} articleParagraphs={paperArticleParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        <Divider />
      </div>
      <Article1_AR articleTitle={energyArticleTitle} articleParagraphs={energyArticleParagraphs} />
      <div style={{ width: '100%', marginTop: '12vh', marginBottom: '0', marginLeft: '10%', marginRight: '10%' }}>
        {/* <Divider /> */}
      </div>

    </div>
  )
}
