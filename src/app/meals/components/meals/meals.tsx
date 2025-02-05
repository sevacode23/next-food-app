import { mealsRepository } from '@/lib/db';

import { MealsGrid } from '../meals-grid';

export const Meals = () => {
  const meals = mealsRepository.getAll();

  return (
    <main>
      <MealsGrid meals={meals} />
    </main>
  );
};
