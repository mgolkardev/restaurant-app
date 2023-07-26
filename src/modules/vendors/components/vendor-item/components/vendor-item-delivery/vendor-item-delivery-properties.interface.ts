import { VendorItemDto } from "../../../../apis/dtos/vendor-item.dto";

export type VendorItemDeliveryProperties = Pick<
  VendorItemDto,
  "isZFExpress" | "deliveryFee" | "max_eta"
>;
