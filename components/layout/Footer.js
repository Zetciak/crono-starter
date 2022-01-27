//Imports
import {
  Typography,
  Button,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

//Images
import logo from '../../public/images/logo.svg';

//Icons
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

//CSS
import useStyles from '../../styles/components/layout/FooterStyle';

//Script
function Footer() {
  //Styles
  const classes = useStyles();

  //Left footer links
  const leftLinks = [
    { title: 'Article XYZ', href: 'https://www.google.pl' },
    { title: 'Article XYZ', href: 'https://www.google.pl' },
    { title: 'Article XYZ', href: 'https://www.google.pl' },
    { title: 'Article XYZ', href: 'https://www.google.pl' },
  ];

  const leftLinksList = [];

  for (let i = 0; i < leftLinks.length; i++) {
    leftLinksList.push(
      <div key={i} className={classes.linkText}>
        <a target="_blank" rel="noreferrer" href={leftLinks[i].href}>
          {leftLinks[i].title}
        </a>
      </div>
    );
  }

  //Center footer links
  const centerLinks = [
    { title: 'Idos', href: 'https://www.google.pl' },
    { title: 'Tiers', href: 'https://www.google.pl' },
    { title: 'Staking', href: 'https://www.google.pl' },
    { title: 'Govermance', href: 'https://www.google.pl' },
  ];

  const centerLinksList = [];

  for (let i = 0; i < centerLinks.length; i++) {
    centerLinksList.push(
      <div key={i} className={classes.linkText}>
        <a target="_blank" rel="noreferrer" href={centerLinks[i].href}>
          {centerLinks[i].title}
        </a>
      </div>
    );
  }

  //Right footer links
  const rightLinks = [
    { title: 'Whitepaper', href: 'https://www.google.pl' },
    { title: 'PitchDeck', href: 'https://www.google.pl' },
    { title: 'Download Branding', href: 'https://www.google.pl' },
  ];

  const rightLinksList = [];

  for (let i = 0; i < rightLinks.length; i++) {
    rightLinksList.push(
      <div key={i} className={classes.linkText}>
        <a target="_blank" rel="noreferrer" href={rightLinks[i].href}>
          {rightLinks[i].title}
        </a>
      </div>
    );
  }

  //Script
  return (
    <>
      <div className={classes.footerDiv}>
        <div className={classes.insideFooterDiv}>
          <div className={classes.topFooterSection}>
            <div className={classes.footerLogos}>
              <div className={classes.logo}>
                <Image src={logo} alt="Logo" />
              </div>
              <Typography className={classes.logoText}>CronoStarter</Typography>
            </div>
            <div className={classes.footerApply}>
              <Typography className={classes.applyText}>
                Ready to get started?
              </Typography>
              <Button variant="contained" className={classes.applyBtn}>
                <Typography>Apply for IDO</Typography>
              </Button>
            </div>
          </div>
          <div className={classes.centerFooterSection}>
            <div className={classes.subscribeSection}>
              <Typography className={classes.subscribeTitle}>
                Subscribe to our newsletter
              </Typography>
              <div className={classes.editBoxDiv}>
                <TextField
                  type="text"
                  className={classes.editBox}
                  autoComplete="off"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment
                        className={classes.editBoxAdornment}
                        position="end"
                      >
                        <Button
                          variant="contained"
                          className={classes.editBoxAdornmentButton}
                        >
                          <ArrowForwardIosRoundedIcon
                            className={classes.editBoxAdornmentIcon}
                          />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className={classes.linksSection}>
              <div className={classes.leftLinksSection}>
                <Typography className={classes.linksTitle}>
                  Learn about Cronos
                </Typography>
                {leftLinksList}
              </div>
              <div className={classes.centerLinksSection}>
                <Typography className={classes.linksTitle}>
                  CronoStarter
                </Typography>
                {centerLinksList}
              </div>
              <div className={classes.rightLinksSection}>
                <Typography className={classes.linksTitle}>
                  Documentantion
                </Typography>
                {rightLinksList}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
