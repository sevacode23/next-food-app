'use client';

import { IErrorPageProps } from '@/typings';

export default function MealsError(props: IErrorPageProps) {
  const { error } = props;

  return (
    <div className="error">
      <h1>An error occurred!</h1>
      <p>{error.message}</p>
    </div>
  );
}
