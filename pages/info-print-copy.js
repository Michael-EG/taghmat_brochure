import React, { useContext } from 'react'
import Layout from '../components/Layout';
import InfoPrintCopy_AR from '../pages_layout/InfoPrintCopy/InfoPrintCopy_AR';
import InfoPrintCopy_EN from '../pages_layout/InfoPrintCopy/InfoPrintCopy_EN';
// import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
// import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function InfoPrintCopy() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const infoPrintCopyTitle_EN = 'Print & Copy useful information';
  const infoPrintCopyTitle_AR = 'معلومات مفيدة للطباعة والنسخ';
  const infoPrintCopyDescription_EN = 'This significantly reduces your energy costs and makes an important contribution to environmental protection.';
  const infoPrintCopyDescription_AR = 'يقلل بشكل كبير من تكاليف الطاقة الخاصة بك ويساهم بشكل كبير في حماية البيئة';

  return (
    <Layout title={language === 'EN' ? infoPrintCopyTitle_EN : infoPrintCopyTitle_AR} description={language === 'EN' ? infoPrintCopyDescription_EN : infoPrintCopyDescription_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <InfoPrintCopy_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <InfoPrintCopy_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
