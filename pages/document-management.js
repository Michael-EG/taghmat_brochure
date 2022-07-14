import React, { useContext } from 'react'
import Layout from '../components/Layout';
import DocumentManagement_AR from '../pages_layout/DocumentManagement/DocumentManagement_AR';
import DocumentManagement_EN from '../pages_layout/DocumentManagement/DocumentManagement_EN';
// import InfoPrintCopy_AR from '../pages_layout/InfoPrintCopy/InfoPrintCopy_AR';
// import InfoPrintCopy_EN from '../pages_layout/InfoPrintCopy/InfoPrintCopy_EN';
// import TechnicalSupport_AR from '../pages_layout/TechnicalSupport/TechnicalSupport_AR';
// import TechnicalSupport_EN from '../pages_layout/TechnicalSupport/TechnicalSupport_EN';
import { Store } from '../utils/store';

export default function DocumentManagement() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  // console.log(language);
  const documentManagementTitle_EN = 'Document management';
  const documentManagementTitle_AR = 'إدارة الوثائق';
  const documentManagementDescription_EN = 'Al-Nour Association will help you with all questions about the different document solution softwares. You can expect competent advice, as well as support and integration of the software in your company. Of course, our competent support team is at your disposal throughout the entire term.';
  const documentManagementDescription_AR = 'سوف تساعدك مؤسسة النور في جميع الأسئلة المتعلقة ببرامج حلول المستندات المختلفة. يمكنك توقع مشورة مختصة ، بالإضافة إلى دعم وتكامل البرنامج في شركتك. بالطبع ، فريق الدعم المختص لدينا تحت تصرفك طوال المدة بأكملها';
  return (
    <Layout title={language === 'EN' ? documentManagementTitle_EN : documentManagementTitle_AR} description={language === 'EN' ? documentManagementDescription_EN : documentManagementDescription_AR}>
      {/* <div>English analysis advice</div> */}
      {language === 'EN' && <DocumentManagement_EN />}
      {/* {language === 'EN' && <div>English is decided</div>} */}
      {language === 'AR' && <DocumentManagement_AR />}
      {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
    </Layout>
  );
}
