'use client';

import { useFormStatus } from 'react-dom';

export const MealsShareSubmit = () => {
  const { pending } = useFormStatus();

  const label = pending ? 'Submitting...' : 'Share';

  return (
    <button type="submit" disabled={pending}>
      {label}
    </button>
  );
};
