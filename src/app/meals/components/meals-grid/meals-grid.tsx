import { IMeal } from '@/typings/models/meal.model';

import { MealItem } from '../meal-item';

import classes from './meals-grid.module.scss';

interface IProps {
  meals: IMeal[];
}

export const MealsGrid = (props: IProps) => {
  const { meals } = props;

  return (
    <ul className={classes.root}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};
