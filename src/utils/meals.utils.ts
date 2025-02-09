import { mealsRepository } from '@/lib/db';
import { createS3UserImage } from '@/services/aws';
import { TCreateMeal } from '@/typings';
import { IMeal } from '@/typings/models';

import { slugifyString, xssString } from './strings';
import { checkValidField } from './forms';

const generateUniqueSlug = (title: string) => {
  const baseSlug = slugifyString(title);

  let uniqueSlug = baseSlug;
  let counter = 1;

  const existingSlugs = mealsRepository
    .getAllSlugsBySlugPrefix(baseSlug)
    .map((mealObj) => mealObj.slug);

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${baseSlug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
};

const getMealImageName = (image: File, slug: string) => {
  const extension = image.name.split('.').pop();

  return `${slug}.${extension}`;
};

const processImage = async (image: File, slug: string) => {
  const fileName = getMealImageName(image, slug);

  await createS3UserImage(image, fileName);

  return { fileName };
};

export const getMealFromInput = async (
  createMeal: TCreateMeal
): Promise<IMeal> => {
  const instructions = xssString(createMeal.instructions);

  const slug = generateUniqueSlug(createMeal.title);

  const { fileName } = await processImage(createMeal.image, slug);

  // @ts-expect-error test
  return {
    ...createMeal,
    slug,
    instructions,
    image: fileName,
  };
};

export const checkValidCreateMeal = (createMeal: TCreateMeal) =>
  checkValidField(createMeal.title) &&
  checkValidField(createMeal.summary) &&
  checkValidField(createMeal.instructions) &&
  checkValidField(createMeal.creator) &&
  checkValidField(createMeal.creatorEmail) &&
  createMeal.creatorEmail.includes('@') &&
  createMeal.image &&
  createMeal.image.size > 0;
