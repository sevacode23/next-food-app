'use server';

import { redirect } from 'next/navigation';

import { createFormDataParser, getMealFromInput } from '@/utils';
import { ROUTES } from '@/const';
import { TCreateMeal } from '@/typings';

import { mealsRepository } from '../db';

export const shareMeal = async (formData: FormData) => {
  const parser = createFormDataParser(formData);

  const data: TCreateMeal = {
    title: parser.getField('title'),
    summary: parser.getField('summary'),
    image: parser.getFile('image'),
    instructions: parser.getField('instructions'),
    creator: parser.getField('creator'),
    creatorEmail: parser.getField('email'),
  };

  const meal = await getMealFromInput(data);

  mealsRepository.create(meal);

  redirect(ROUTES.MEALS);
};
