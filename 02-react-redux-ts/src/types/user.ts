export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOG_OUT = 'LOG_OUT' as const;

export interface LogInRequest {
  id: string;
  password: string;
}

export interface LogInRequestAction {
  type: typeof LOG_IN_REQUEST;
  data: LogInRequest;
}

export interface LogInSuccess {
  userId: number;
  nickname: string;
}

export interface LogInSuccessAction {
  type: typeof LOG_IN_SUCCESS;
  data: LogInSuccess;
}

export interface LogInFailureAction {
  type: typeof LOG_IN_FAILURE;
  error: Error;
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}

export type UserReducerAction =
  | LogInRequestAction
  | LogInSuccessAction
  | LogInFailureAction
  | LogOutAction;

export interface UserState {
  isLoggingIn: boolean;
  data: {
    nickname: string;
  } | null;
}
