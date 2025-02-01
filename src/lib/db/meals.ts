import sql from 'better-sqlite3';

import { IMeal } from '@/typings/models/meal.model';

import { DB_PATH } from './db.constants';

const db = sql(DB_PATH);

export const getMeals = () => {
  return db.prepare<unknown[], IMeal>('SELECT * FROM meals').all();
};

export const getMealBySlug = (slug: string) => {
  return db
    .prepare<string, IMeal>('SELECT * FROM meals WHERE slug = ?')
    .get(slug);
};
