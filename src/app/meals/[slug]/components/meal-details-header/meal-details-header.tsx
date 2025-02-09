import { MealImage } from '@/components/meal-image';

import classes from './meal-details-header.module.scss';
interface IProps {
  title: string;
  creator: string;
  creatorEmail: string;
  summary: string;
  image: string;
}

export const MealDetailsHeader = (props: IProps) => {
  const { title, creator, creatorEmail, summary, image } = props;

  return (
    <header className={classes.root}>
      <div className={classes.image}>
        <MealImage image={image} alt={title} />
      </div>

      <div className={classes.headerText}>
        <h1>{title}</h1>

        <p className={classes.creator}>
          by <a href={`mailto:${creatorEmail}`}>{creator}</a>
        </p>

        <p className={classes.summary}>{summary}</p>
      </div>
    </header>
  );
};
