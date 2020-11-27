type ThunkAction = (dispatch: ThunkDispatch) => void;

interface ThunkDispatch {
  (thunkAction: ThunkAction): void;
  <F>(action: F): F;
  <F>(action: F | ThunkAction): F;
}
