'use client';

import { startTransition, useState } from 'react';

import { IActionError, IActionState } from '@/typings';

export const useFormAction = <
  R extends IActionState,
  A extends (formData: FormData) => Promise<R> | R,
>(
  action: A
) => {
  const [error, setError] = useState<IActionError>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        const result = await action(formData);

        if (result.error) {
          setError(result.error);
        }
      } catch (err) {
        console.error(err);
      }
    });
  };

  return { error, onSubmit };
};
