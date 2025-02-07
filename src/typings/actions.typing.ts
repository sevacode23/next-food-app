export interface IActionError {
  message: string;
}

export interface IActionState {
  error: IActionError | null;
}
