import classes from './meals-share-form.module.scss';

export const MealsShareForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.row}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
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
      IMAGE PICKER
      <p className={classes.actions}>
        <button type="submit">Share Meal</button>
      </p>
    </form>
  );
};
