// import { Store } from '@mui/icons-material';
// import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/Layout';
// import AnalysisAdvice_AR from '../pages_layout/AnalysisAdvice_AR';
// import AnalysisAdvice_EN from '../pages_layout/AnalysisAdvice_EN';
// import OfficeSolutions_AR from '../pages_layout/OfficeSolutions/OfficeSolutions_AR';
// import OfficeSolutions_EN from '../pages_layout/OfficeSolutions/OfficeSolutions_EN';
import SoftwareSolutions_AR from '../pages_layout/SoftwareSolutions/SoftwareSolutions_AR';
import SoftwareSolutions_EN from '../pages_layout/SoftwareSolutions/SoftwareSolutions_EN';
import styles from '../styles/Home.module.css';
import { Store } from '../utils/store';
// import { useContext } from 'react';
// import { Store } from '../utils/store';

export default function SoftwareSolutions() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const softwareSolutionsTitle_EN = 'Software solutions';
  const softwareSolutionsTitle_AR = 'حلول البرمجيات';
  const softwareSolutionsDescription_EN = 'Save time and take control of your print environments with solutions that personalize your documents, automatically distribute them to multiple destinations, and protect your data.';
  const softwareSolutionsDescription_AR = 'وفر الوقت وتحكم في بيئات الطباعة الخاصة بك من خلال الحلول التي تخصص مستنداتك ، وتوزعها تلقائيًا على وجهات متعددة ، وتحمي بياناتك';

  return (
    <Layout title={language === 'EN' ? softwareSolutionsTitle_EN : softwareSolutionsTitle_AR} description={language === 'EN' ? softwareSolutionsDescription_EN : softwareSolutionsDescription_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <SoftwareSolutions_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <SoftwareSolutions_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
