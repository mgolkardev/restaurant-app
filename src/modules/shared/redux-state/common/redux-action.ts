import { Action } from "redux";

export interface ReduxAction<TActionType extends string, TPayload = undefined>
  extends Action<TActionType | "__NEXT_REDUX_WRAPPER_HYDRATE__"> {
  readonly payload?: TPayload;
}
