import Link from 'next/link';

import classes from './meals-header.module.scss';

export const MealsHeader = () => (
  <header className={classes.root}>
    <h1>
      Delicious meals, created <span className={classes.highlight}>by you</span>
    </h1>

    <p>Choose your favorite recipe and cook it yourself. Is is easy and fun!</p>

    <p className={classes.cta}>
      <Link href="/meals/share">Share Your Favorite Recipe</Link>
    </p>
  </header>
);
