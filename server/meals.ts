import sql from 'better-sqlite3';

import { IMeal } from 'models/meal.model';

const db = sql('api/meals.db');

export const getMeals = () => {
  return db.prepare<unknown[], IMeal>('SELECT * FROM meals').all();
};
