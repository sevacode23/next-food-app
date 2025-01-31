import { HomeLink } from '@/components/home-link';
import { TPropsParam } from '@/typings';

const Meal = async (props: TPropsParam<'slug'>) => {
  const { params } = props;

  const slug = (await params).slug;

  return (
    <div>
      <h1>Meal</h1>

      <p>{slug}</p>

      <HomeLink />
    </div>
  );
};

export default Meal;
