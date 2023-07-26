import { ResultSet } from "../../shared/interfaces/result-set.interface";
import { axiosClient } from "../../shared/utils/axios-client";
import { VENDORS_PER_PAGE } from "./constants/vendors.constant";
import { VendorDto } from "./dtos/vendor.dto";
import { LatLong } from "./interfaces/lat-long.interface";

export const getVendors = async (page: number, latLong: LatLong) => {
  const { data } = await axiosClient.get<ResultSet<VendorDto[]>>(
    `/v3/restaurant/vendors-list`,
    {
      params: {
        page_size: VENDORS_PER_PAGE,
        page,
        lat: latLong.latitude,
        long: latLong.longitude,
        updateChannels: JSON.stringify(["master"]),
      },
    }
  );
  return data;
};
