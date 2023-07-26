import { VendorDto } from "../apis/dtos/vendor.dto";

export interface VendorState {
  status?: "Fetching" | "Fetched" | "FetchFailed";
  data: VendorDto[];
  total: number;
  nextPage: number;
  openCount: number;
}
