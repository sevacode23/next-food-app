import { Suspense } from 'react';

import { MealsHeader, Meals, MealsLoader } from './components';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community.',
};

const MealsPage = () => {
  return (
    <>
      <MealsHeader />

      <Suspense fallback={<MealsLoader />}>
        <Meals />
      </Suspense>
    </>
  );
};

export default MealsPage;
