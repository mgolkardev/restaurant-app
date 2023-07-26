import { VendorItemDto } from "../../../../apis/dtos/vendor-item.dto";

export type VendorItemTitleProperties = Pick<
  VendorItemDto,
  "title" | "rate" | "commentCount" | "discountValueForView"
>;
