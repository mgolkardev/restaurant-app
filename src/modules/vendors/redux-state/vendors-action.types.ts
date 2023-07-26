import { AxiosResponse } from "axios";
import { VendorsActionType } from "./vendors-action-type.enum";
import { VendorDto } from "../apis/dtos/vendor.dto";
import { ReduxAction } from "../../shared/redux-state/common/redux-action";
import { ReduxActionCreator } from "../../shared/redux-state/common/redux-action-creator";
import { ResultSet } from "../../shared/interfaces/result-set.interface";

export type VendorsAction = ReduxAction<VendorsActionType, unknown>;

export class VendorsListFetchFailedAction extends ReduxActionCreator<
  VendorsActionType.ListFetchFailed,
  AxiosResponse
> {}
export class VendorsListFetchingAction extends ReduxActionCreator<
  VendorsActionType.ListFetching,
  undefined
> {}
export class VendorsListFetchedAction extends ReduxActionCreator<
  VendorsActionType.ListFetched,
  ResultSet<VendorDto[]>
> {}
