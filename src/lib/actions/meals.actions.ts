'use server';

import { redirect } from 'next/navigation';

import {
  checkValidCreateMeal,
  createFormDataParser,
  getMealFromInput,
} from '@/utils';
import { ROUTES } from '@/const';
import { IActionState, TCreateMeal } from '@/typings';

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

  if (!checkValidCreateMeal(data)) {
    const action: IActionState = {
      error: { message: 'Invalid meal data' },
    };

    return action;
  }

  const meal = await getMealFromInput(data);

  mealsRepository.create(meal);

  redirect(ROUTES.MEALS);
};
