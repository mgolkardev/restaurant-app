import { VendorItemDto } from "../../apis/dtos/vendor-item.dto";
import "./vendor-item.component.style.scss";
import { VendorItemTitle } from "./components/vendor-item-title/vendor-item-title.component";
import { VendorItemDelivery } from "./components/vendor-item-delivery/vendor-item-delivery.component";
import { VendorItemHeader } from "./components/vendor-item-header/vendor-item-header.component";

export const VendorItem = ({
  backgroundImage,
  title,
  logo,
  rate,
  commentCount,
  description,
  isZFExpress,
  deliveryFee,
  max_eta,
  best_coupon,
  is_pro,
  discountValueForView,
}: VendorItemDto) => {
  return (
    <div className="vendor-item">
      <VendorItemHeader
        backgroundImage={backgroundImage}
        title={title}
        logo={logo}
        best_coupon={best_coupon}
        is_pro={is_pro}
      />
      <div className="vendor-item__body">
        <VendorItemTitle
          title={title}
          rate={rate}
          commentCount={commentCount}
          discountValueForView={discountValueForView}
        />

        {description ? (
          <span className="vendor-item__body__description">{description}</span>
        ) : undefined}

        <VendorItemDelivery
          isZFExpress={isZFExpress}
          deliveryFee={deliveryFee}
          max_eta={max_eta}
        />
      </div>
    </div>
  );
};
