//Imports
import Head from 'next/head';

//CSS
import useStyles from '../styles/pages/ContactStyle';

//Script
function ContactPage() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>CronoStarter - Contact page</title>
      </Head>
      <h1 className={classes.test2}>Contact</h1>
    </>
  );
}

export default ContactPage;
