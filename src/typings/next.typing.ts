export type TPropsParam<T extends string> = {
  params: Promise<Record<T, string>>;
};

export interface IErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}
