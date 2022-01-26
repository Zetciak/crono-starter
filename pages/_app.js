//Imports
import { CssBaseline } from '@material-ui/core';
import dynamic from 'next/dynamic';
const NavigationBar = dynamic(
  () => import('../components/layout/NavigationBar'),
  { ssr: false }
);
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
    <div>
      <CssBaseline />
      <div className="portal"></div>
      <NavigationBar></NavigationBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
