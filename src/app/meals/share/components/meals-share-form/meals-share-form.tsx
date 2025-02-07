'use client';

import { useFormAction } from '@/hooks';
import { shareMeal } from '@/lib/actions';

import { MealsShareImagePicker } from '../meals-share-image-picker';
import { MealsShareSubmit } from '../meals-share-submit';

import classes from './meals-share-form.module.scss';

export const MealsShareForm = () => {
  const { error, onSubmit } = useFormAction(shareMeal);

  const RenderError = error ? <p>{error.message}</p> : null;

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes.row}>
        <p>
          <label htmlFor="creator">Your name</label>
          <input type="text" id="creator" name="creator" required />
        </p>

        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>

      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>

      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>

      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          rows={10}
          required
        ></textarea>
      </p>

      <MealsShareImagePicker name="image" label="Image" />

      {RenderError}

      <p className={classes.actions}>
        <MealsShareSubmit />
      </p>
    </form>
  );
};
