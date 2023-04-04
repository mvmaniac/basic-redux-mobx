export const THUNK_ACTION = 'THUNK_ACTION' as const;

export type ThunkAction = {
  type: typeof THUNK_ACTION;
  thunk: (dispatch: ThunkDispatch) => void;
};

interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <F>(action: F): F;
  <F>(action: F | ThunkAction): F;
}
