'use client';

import { startTransition, useState } from 'react';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { isNotFoundError } from 'next/dist/client/components/not-found';

import { IActionError, IActionState } from '@/typings';

export const useFormAction = <
  R extends IActionState,
  A extends (formData: FormData) => Promise<R | undefined> | (R | undefined),
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

        if (result?.error) {
          return setError(result.error);
        }
      } catch (err: unknown) {
        if (isRedirectError(err) || isNotFoundError(err)) {
          throw err;
        }

        setError({ message: (err as Error).message });
        console.error(err);
      }
    });
  };

  return { error, onSubmit };
};
