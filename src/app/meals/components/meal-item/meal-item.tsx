import Link from 'next/link';

import { MealImage } from '@/components/meal-image';
import { IMeal } from '@/typings/models/meal.model';

import classes from './meal-item.module.scss';

export const MealItem = (props: IMeal) => {
  const { title, slug, image, summary, creator } = props;

  return (
    <article className={classes.root}>
      <header>
        <div className={classes.image}>
          <MealImage image={image} alt={title} />
        </div>

        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>

        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
};
