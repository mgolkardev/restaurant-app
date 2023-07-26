import { AxiosResponse } from "axios";
import { AppServices } from "../../shared/redux-state/app-services.interface";
import { AppState } from "../../shared/redux-state/app-state.interface";
import { AppDispatch } from "../../shared/redux-state/common/app.dispatch.type";
import { LatLong } from "../apis/interfaces/lat-long.interface";
import { VendorsActionType } from "./vendors-action-type.enum";
import {
  VendorsListFetchedAction,
  VendorsListFetchFailedAction,
  VendorsListFetchingAction,
} from "./vendors-action.types";

export class VendorsActions {
  public static getVendors(
    dispatch: AppDispatch,
    latLong: LatLong
  ): Promise<void> {
    return dispatch(
      async (
        localDispatch: AppDispatch,
        _getState: () => AppState,
        services: AppServices
      ): Promise<void> => {
        try {
          dispatch(
            new VendorsListFetchingAction(VendorsActionType.ListFetching)
          );
          const result = await services.vendors.getVendors(
            _getState().vendors.nextPage,
            latLong
          );

          dispatch(
            new VendorsListFetchedAction(VendorsActionType.ListFetched, result)
          );
        } catch (error) {
          dispatch(
            new VendorsListFetchFailedAction(
              VendorsActionType.ListFetchFailed,
              error as AxiosResponse
            )
          );
          throw error;
        }
      }
    );
  }
}
