import "./vendor-item-title.component.style.scss";
import { StarIcon } from "@heroicons/react/24/solid";
import { VendorItemTitleProperties } from "./vendor-item-title-properties.interface";

export const VendorItemTitle = ({
  title,
  rate,
  commentCount,
  discountValueForView,
}: VendorItemTitleProperties) => {
  return (
    <div className="vendor-item-title">
      <span className="vendor-item-title__title">
        <span className="vendor-item-title__titleText">{title}</span>
        {discountValueForView && discountValueForView > 0 ? (
          <span className="vendor-item-title__discount">
            تا{discountValueForView}%
          </span>
        ) : undefined}
      </span>
      <span className="vendor-item-title__rateLayout">
        <span className="vendor-item-title__rate">
          <StarIcon width={12} />
          {rate}
        </span>
        ({commentCount})
      </span>
    </div>
  );
};
