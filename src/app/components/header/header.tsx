import Link from 'next/link';

import { SlideShow } from '../slideshow';

import classes from './header.module.scss';

export const Header = () => (
  <header className={classes.root}>
    <div className={classes.slideshow}>
      <SlideShow />
    </div>

    <div>
      <div className={classes.hero}>
        <h1>NextLevel Food for NextLevel Foodies</h1>
        <p>Test & share food from all over the world.</p>
      </div>

      <div className={classes.cta}>
        <Link className={classes.communityLink} href="/community">
          Join the Community
        </Link>
        <Link href="/meals">Explore Meals</Link>
      </div>
    </div>
  </header>
);
