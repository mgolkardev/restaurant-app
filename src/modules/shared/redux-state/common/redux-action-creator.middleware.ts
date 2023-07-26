import { Action, Middleware } from "redux";
import { Dispatch } from "react";
import { ReduxActionCreator } from "./redux-action-creator";

export const actionCreatorMiddleware: Middleware =
  ({}) =>
  (next: Dispatch<Action>) =>
  (action: Action) => {
    if (action instanceof ReduxActionCreator) {
      return next(action.toAction());
    }

    if (action instanceof Promise) {
      return action;
    }

    return next(action);
  };
