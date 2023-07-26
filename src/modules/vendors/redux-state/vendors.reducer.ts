import {
  VendorsAction,
  VendorsListFetchedAction,
} from "./vendors-action.types";
import { VendorsActionType } from "./vendors-action-type.enum";
import { VendorState } from "./vendors-state.interface";

const initialState: VendorState = {
  data: [],
  openCount: 0,
  total: 0,
  nextPage: 0,
};

export const vendorsReducer = (
  state: VendorState = initialState,
  action: VendorsAction
): VendorState => {
  switch (action.type) {
    case VendorsActionType.ListFetching:
      return {
        ...state,
        status: "Fetching",
      };

    case VendorsActionType.ListFetched:
      const paylod = (action as VendorsListFetchedAction).payload;
      if (!paylod) {
        return state;
      }
      return {
        ...state,
        status: "Fetched",
        data: [
          ...state.data,
          ...paylod.data.finalResult.filter((x) => x.type === "VENDOR"),
        ],
        total: paylod.data.count,
        nextPage: state.nextPage + 1,
        openCount: paylod.data.open_count,
      };

    case VendorsActionType.ListFetchFailed:
      return {
        ...state,
        status: "FetchFailed",
      };

    default:
      return state;
  }
};
