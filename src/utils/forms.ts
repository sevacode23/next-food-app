export const createFormDataParser = (formData: FormData) => {
  const getField = (key: string) => {
    const value = formData.get(key);

    if (typeof value !== 'string') {
      throw new Error(`${key} must be a string`);
    }

    return value;
  };

  const getFile = (key: string) => {
    const value = formData.get(key);

    if (!(value instanceof File)) {
      throw new Error(`${key} must be of type File`);
    }

    return value;
  };

  return { getField, getFile };
};

export const checkValidField = (str: string | undefined) =>
  str && str.trim() !== '';
