//Imports
import { CssBaseline } from '@material-ui/core';
import NavigationBar from '../components/layout/NavigationBar';
import { useEffect } from 'react';

//CSS
import '../styles/globals.css';

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
