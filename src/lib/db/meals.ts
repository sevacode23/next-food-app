import { Database } from 'better-sqlite3';

import { IMeal } from '@/typings/models';

import { sqlDB } from './db';

export class MealsRepository {
  public constructor(private db: Database) {}

  public getAll() {
    const stmt = this.db.prepare<unknown[], IMeal>('SELECT * FROM meals');
    return stmt.all();
  }

  public getBySlug(slug: string) {
    const stmt = this.db.prepare<string, IMeal>(
      'SELECT * FROM meals WHERE slug = ?'
    );
    return stmt.get(slug);
  }

  public create(meal: IMeal) {
    const stmt = this.db.prepare(`
      INSERT INTO meals
        (slug, title, summary, instructions, image, creator, creator_email)
      VALUES (
        @slug,
        @title, 
        @summary, 
        @instructions,
        @image,
        @creator,
        @creatorEmail
      )`);

    return stmt.run(meal);
  }
}

export const mealsRepository = new MealsRepository(sqlDB);
