import React, { useContext } from 'react';
import { Store } from '../../utils/store';
import Navbar_AR from './Navbar_AR';
import Navbar_EN from './Navbar_EN';

export default function Navbar({ toFooterScrollAction }) {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  //   return (
  if (language === 'EN') {
    return <Navbar_EN toFooterScrollAction={toFooterScrollAction} />;
  }
  if (language === 'AR') {
    return <Navbar_AR />;
  }
  return <div></div>;
  // <div>

  // </div>
  //   )
}
