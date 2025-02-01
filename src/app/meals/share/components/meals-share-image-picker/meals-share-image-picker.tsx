'use client';

import Image from 'next/image';

import { useMealsShareImagePicker } from './meals-share-image-picker.state';
import classes from './meals-share-image-picker.module.scss';

interface IProps {
  name: string;
  label: string;
}

export const MealsShareImagePicker = (props: IProps) => {
  const { name, label } = props;

  const { pickedImage, inputRef, onClick, onChange } =
    useMealsShareImagePicker();

  const RenderPreview = pickedImage ? (
    <Image src={pickedImage} alt="The image selected by the user" fill />
  ) : (
    <p>No image picked yet.</p>
  );

  return (
    <div className={classes.root}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>{RenderPreview}</div>

        <input
          className={classes.input}
          ref={inputRef}
          type="file"
          id={name}
          name={name}
          required
          accept="image/png, image.jpeg"
          onChange={onChange}
        />

        <button className={classes.button} type="button" onClick={onClick}>
          Pick Image
        </button>
      </div>
    </div>
  );
};
