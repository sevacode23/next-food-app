'use server';

export const shareMeal = async (formData: FormData) => {
  const data = Object.fromEntries(formData);

  console.log(data);
};
