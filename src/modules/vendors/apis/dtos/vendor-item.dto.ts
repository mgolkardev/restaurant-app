export interface VendorItemDto {
  id: number;
  title: string;
  description?: string;
  rate: number;
  commentCount: number;
  logo: string;
  backgroundImage: string;
  deliveryFee: number;
  isZFExpress: boolean;
  max_eta: number;
  best_coupon?: string;
  is_pro: boolean;
  discountValueForView?: number;
}
