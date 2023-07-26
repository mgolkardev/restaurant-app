import { useState } from "react";
import { Link, List, Progress, Skeleton } from "../shared/components";
import { LatLong } from "./apis/interfaces/lat-long.interface";
import "./vendors.module.style.scss";
import { VendorItem } from "./components/vendor-item/vendor-item.component";
import { VendorsActions } from "./redux-state/vendors-actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../shared/redux-state/app-state.interface";
import { VendorState } from "./redux-state/vendors-state.interface";

export const VendorsModule = () => {
  // default location
  const [latLong, setLatLong] = useState<LatLong>({
    latitude: 35.675,
    longitude: 51.364,
  });

  const dispatch = useDispatch();
  const { data, status, total, openCount } = useSelector<AppState, VendorState>(
    (state) => state.vendors
  );

  if (total === 0 && status === "Fetching") {
    return (
      <div className="vendors">
        <div className="vendors__progress">
          <Progress />
        </div>
      </div>
    );
  }

  return (
    <div className="vendors">
      {openCount > 0 ? (
        <p className="vendors__count">{openCount} فروشنده‌ی باز</p>
      ) : undefined}
      <List
        className="vendors__list"
        wrapperClassName="vendors__wrapper"
        error={status === "FetchFailed"}
        total={total}
        itemHeight={260}
        itemRenderer={({ key, index, isLoaded, style }) => {
          const item = data[index]?.data;

          if (!isLoaded || !item) {
            return (
              <div key={key} style={style} className="vendors__skeleton">
                <Skeleton />
              </div>
            );
          }

          return (
            <Link
              key={key}
              href={`/vendor/${item.id}`}
              style={style}
              className="vendors__link"
            >
              <VendorItem {...item} />
            </Link>
          );
        }}
        loadMore={() => VendorsActions.getVendors(dispatch, latLong)}
      />
    </div>
  );
};
