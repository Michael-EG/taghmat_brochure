import React, { useContext } from 'react'
import Layout from '../components/Layout';
import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function TechnicalSupport() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const technicalSupportTitle_EN = 'Technical Support';
  const technicalSupportTitle_AR = 'دعم فني';
  const technicalSupportDescription_EN = 'Trained service technicians support you from Monday to Friday from 7.30 a.m. to 5 p.m. competently and reliably personally, on the phone and via Teamviewer.';
  const technicalSupportDescription_AR = 'يدعمك فنيو الخدمة المدربون من الاثنين إلى الجمعة من الساعة 7.30 صباحًا حتى الساعة 5 مساءً بكفاءة وموثوقية شخصيًا ، على الهاتف وعبر برنامج TeamViewer';

  return (
    <Layout title={language === 'EN' ? technicalSupportTitle_EN : technicalSupportTitle_AR} description={language === 'EN' ? technicalSupportDescription_EN : technicalSupportDescription_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <TechnicalSupport_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <TechnicalSupport_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
