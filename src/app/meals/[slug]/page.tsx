import { notFound } from 'next/navigation';

import { TPropsParam } from '@/typings';
import { getMealBySlug } from '@/lib/db';

import { MealDetailsHeader, MealDetailsInstructions } from './components';

const Meal = async (props: TPropsParam<'slug'>) => {
  const { params } = props;

  const slug = (await params).slug;

  const meal = getMealBySlug(slug);

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
