import { notFound } from 'next/navigation';

import { mealsRepository } from '@/lib/db';
import { TPropsParam } from '@/typings';

import { MealDetailsHeader, MealDetailsInstructions } from './components';

const Meal = async (props: TPropsParam<'slug'>) => {
  const { params } = props;

  const slug = (await params).slug;

  const meal = mealsRepository.getBySlug(slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <MealDetailsHeader
        title={meal.title}
        creator={meal.creator}
        creatorEmail={meal.creatorEmail}
        summary={meal.summary}
        image={meal.image}
      />

      <MealDetailsInstructions instructions={meal.instructions} />
    </>
  );
};

export default Meal;
