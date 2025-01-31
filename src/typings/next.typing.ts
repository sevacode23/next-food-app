export type TPropsParam<T extends string> = {
  params: Promise<Record<T, string>>;
};
