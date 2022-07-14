// import { Store } from '@mui/icons-material';
// import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/Layout';
// import AnalysisAdvice_AR from '../pages_layout/AnalysisAdvice_AR';
// import AnalysisAdvice_EN from '../pages_layout/AnalysisAdvice_EN';
import OfficeSolutions_AR from '../pages_layout/OfficeSolutions/OfficeSolutions_AR';
import OfficeSolutions_EN from '../pages_layout/OfficeSolutions/OfficeSolutions_EN';
import styles from '../styles/Home.module.css';
import { Store } from '../utils/store';
// import { useContext } from 'react';
// import { Store } from '../utils/store';

export default function OfficeSolutions() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const officeSolutionsTitle_EN = 'office solutions';
  const officeSolutionsTitle_AR = 'حلول مكتبية';
  const officeSolutionsDescriptions_EN = 'office systems. Fleet management for automatic toner ordering, meter reading transmission, service requests. Fast, productive and above all user-friendly.';
  const officeSolutionsDescriptions_AR = 'في محادثة شخصية ، سنكتشف معًا الطابعة الأفضل بالنسبة لك والتي تلبي جميع متطلباتك. مزيج من أنظمة الطباعة والبرمجيات';

  return (
    <Layout title={language === 'EN' ? officeSolutionsTitle_EN : officeSolutionsTitle_AR} description={language === 'EN' ? officeSolutionsDescriptions_EN : officeSolutionsDescriptions_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <OfficeSolutions_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <OfficeSolutions_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
