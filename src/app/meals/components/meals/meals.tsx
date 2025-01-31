import { getMeals } from 'server/meals';

import { MealsGrid } from '../meals-grid';

export const Meals = () => {
  const meals = getMeals();

  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
};
