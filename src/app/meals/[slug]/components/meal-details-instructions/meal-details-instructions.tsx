import classes from './meal-details-instructions.module.scss';

interface IProps {
  instructions: string;
}

export const MealDetailsInstructions = (props: IProps) => {
  const { instructions } = props;

  const instructionsHTML = instructions.replace(/\n/g, '<br />');

  return (
    <p
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: instructionsHTML }}
    ></p>
  );
};
