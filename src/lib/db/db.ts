import sql from 'better-sqlite3';

import { DB_PATH } from './db.constants';

export const sqlDB = sql(DB_PATH);
