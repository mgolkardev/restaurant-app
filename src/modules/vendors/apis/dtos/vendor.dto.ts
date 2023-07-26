import { VendorItemDto } from "./vendor-item.dto";

export interface VendorDto {
  type: "TEXT" | "VENDOR";
  data: VendorItemDto;
}
