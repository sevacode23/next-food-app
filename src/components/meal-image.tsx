import Image from 'next/image';

import { URLS } from '@/const';

interface IProps {
  image: string;
  alt: string;
}

export const MealImage = (props: IProps) => {
  const { image, alt } = props;

  return <Image src={URLS.S3_USER_IMAGES + image} alt={alt} fill />;
};
