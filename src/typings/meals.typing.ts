import { IMeal } from './models/meal.model';

export type TCreateMeal = Omit<IMeal, 'id' | 'slug' | 'image'> & {
  image: File;
};
