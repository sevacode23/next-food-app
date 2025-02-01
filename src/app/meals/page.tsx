import { Suspense } from 'react';

import { MealsHeader, Meals, MealsLoader } from './components';

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
