import { getMeals } from '@/lib/db';

import { MealsGrid } from '../meals-grid';

export const Meals = async () => {
  const meals = await getMeals();

  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
};
