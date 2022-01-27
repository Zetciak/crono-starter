//Imports
import { Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

//CSS
import useStyles from '../styles/pages/404Style';

//Images
import errorImage from '../public/images/404Image.svg';

//Script
function Custom404() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div className="container">
        <div className={classes.error404Div}>
          <Typography className={classes.errorTypography}>
            Oh, no! This page does not exist.
          </Typography>
          <div className={classes.buttonDiv}>
            <Link href="/" passHref>
              <Button variant="contained" className={classes.stakeBtn}>
                <Typography>Go to main page</Typography>
              </Button>
            </Link>
          </div>
          <div className={classes.imageDiv}>
            <Image src={errorImage} alt="" />
          </div>
        </div>
        <div className={classes.footerMarginTop}></div>
      </div>
    </>
  );
}

export default Custom404;
