import React, { useContext } from 'react';
import Layout from '../components/Layout';
import Privacy_AR from '../pages_layout/Privacy/Privacy_AR';
import Privacy_EN from '../pages_layout/Privacy/Privacy_EN';
import { Store } from '../utils/store';

export default function Privacy() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  const technicalSupportTitle_EN = 'Privacy';
  const technicalSupportTitle_AR = 'الخصوصية';
  const technicalSupportDescription_EN = '';
  const technicalSupportDescription_AR = '';

  return (
    <div>
      <Layout
        title={
          language === 'EN'
            ? technicalSupportTitle_EN
            : technicalSupportTitle_AR
        }
        description={
          language === 'EN'
            ? technicalSupportDescription_EN
            : technicalSupportDescription_AR
        }
      >
        {/* <div>English analysis advice</div> */}
        {language === 'EN' && <Privacy_EN />}
        {/* {language === 'EN' && <div>English is decided</div>} */}
        {language === 'AR' && <Privacy_EN />}
        {language !== 'EN' && language !== 'AR' && <div>Not decided</div>}
      </Layout>
    </div>
  );
}
