import React from 'react';

export default function NavigationDrawer() {
  const { state, dispatch } = useContext(Store);
  const { language } = state;
  //   return (
  if (language === 'EN') {
    //   return <Navbar_EN />;
  }
  if (language === 'AR') {
    //   return <Navbar_AR />;
  }
  return <div></div>;
}
