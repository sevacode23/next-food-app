import { useRef, useState } from 'react';

export const useMealsShareImagePicker = () => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const imageDataUrl = URL.createObjectURL(file);

    setPickedImage(imageDataUrl);
  };

  return { pickedImage, inputRef, onClick, onChange };
};
