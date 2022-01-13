//Imports
import { CssBaseline } from '@material-ui/core';
import NavigationBar from '../components/layout/NavigationBar';
import { useEffect } from 'react';

//CSS
import '../styles/globals.css';

//Images
import bg from '../public/images/background.webp';
import portal from '../public/images/portal.webp';

//Script
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <div className="portal"></div>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
