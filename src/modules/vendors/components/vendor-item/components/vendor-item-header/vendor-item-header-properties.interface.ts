import { VendorItemDto } from "../../../../apis/dtos/vendor-item.dto";

export type VendorItemHeaderProperties = Pick<
  VendorItemDto,
  "backgroundImage" | "title" | "logo" | "best_coupon" | "is_pro"
>;
