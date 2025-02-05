import slugify from 'slugify';
import xss from 'xss';

export const slugifyString = (str: string) => slugify(str, { lower: true });

export const xssString = (str: string) => xss(str);
