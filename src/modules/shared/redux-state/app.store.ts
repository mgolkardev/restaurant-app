import { applyMiddleware, combineReducers, createStore } from "redux";
import { AppServices } from "./app-services.interface";
import { AppState } from "./app-state.interface";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import * as VendorAPIs from "../../vendors/apis/vendors.api";
import { actionCreatorMiddleware } from "./common/redux-action-creator.middleware";
import { vendorsReducer } from "../../vendors/redux-state/vendors.reducer";

export const appStore = createStore(
  combineReducers<AppState>({
    vendors: vendorsReducer,
    // other states
  }),
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument<AppServices>({
        vendors: VendorAPIs,
      })
    ),
    applyMiddleware(actionCreatorMiddleware)
  )
);
