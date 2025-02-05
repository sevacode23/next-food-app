import { TCreateMeal } from '@/typings';
import { IMeal } from '@/typings/models';

import { slugifyString, xssString } from './strings';
import { writePublicImage } from './images';

const getMealImageName = (image: File, slug: string) => {
  const extension = image.name.split('.').pop();

  return `${slug}.${extension}`;
};

const processImage = async (image: File, slug: string) => {
  const imageName = getMealImageName(image, slug);

  const imageUrl = await writePublicImage(image, imageName);

  return imageUrl;
};

export const getMealFromInput = async (
  createMeal: TCreateMeal
): Promise<IMeal> => {
  const instructions = xssString(createMeal.instructions);

  const slug = slugifyString(createMeal.title);

  const image = await processImage(createMeal.image, slug);

  // @ts-expect-error test
  return {
    ...createMeal,
    slug,
    instructions,
    image,
  };
};
