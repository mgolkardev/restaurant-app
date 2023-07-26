import { ReduxAction } from "./redux-action";

export class ReduxActionCreator<
  TActionType extends string,
  TPayload = undefined
> implements ReduxAction<TActionType, TPayload>
{
  public readonly type: TActionType;
  public readonly payload?: TPayload;

  public constructor(type: TActionType, payload?: TPayload) {
    this.type = type;
    this.payload = payload;
  }

  public toAction(): ReduxAction<TActionType, TPayload> {
    return {
      type: this.type,
      payload: this.payload,
    };
  }
}
