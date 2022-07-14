// import { Store } from '@mui/icons-material';
import Head from 'next/head';
import { useContext } from 'react';
import Layout from '../components/Layout';
import AnalysisAdvice_AR from '../pages_layout/AnalysisAdvice_AR';
import AnalysisAdvice_EN from '../pages_layout/AnalysisAdvice_EN';
import styles from '../styles/Home.module.css';
import { Store } from '../utils/store';
// import { useContext } from 'react';
// import { Store } from '../utils/store';

export default function AnalysisAdvice() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const analysisAdvice_EN = 'Analysis & Advice';
  const analysisAdvice_AR = 'تحليل البنية التحتية';
  const analysisAdviceDescription_EN = 'First we need to know the initial situation. We analyze the office infrastructure used (printers, copiers, scanners, multifunction devices) and the connected software for you. This is the most important prerequisite for a comprehensive and sustainable optimization of your print and document management. We record your system landscape on site and develop a suggestion for improvement that is specially tailored to your company.';
  const analysisAdviceDescription_AR = 'نحتاج أولاً إلى تسجيل الوضع الأولي. نقوم بتحليل البنية التحتية للمكتب المستخدمة (الطابعات وآلات النسخ والماسحات الضوئية والأجهزة متعددة الوظائف) والبرامج المتصلة من أجلك. هذا هو أهم شرط مسبق لتحسين شامل ومستدام لإدارة الطباعة والوثائق الخاصة بك. نسجل مشهد النظام الخاص بك في الموقع ونضع اقتراحًا للتحسين مصممًا خصيصًا لشركتك';

  return (
    <Layout title={language === 'EN' ? analysisAdvice_EN : analysisAdvice_AR} description={language === 'EN' ? analysisAdviceDescription_EN : analysisAdviceDescription_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <AnalysisAdvice_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <AnalysisAdvice_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
