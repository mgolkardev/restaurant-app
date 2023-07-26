import "./vendor-item-header.component.style.scss";
import classNames from "classnames";
import { VendorItemHeaderProperties } from "./vendor-item-header-properties.interface";

export const VendorItemHeader = ({
  backgroundImage,
  title,
  logo,
  best_coupon,
  is_pro,
}: VendorItemHeaderProperties) => {
  return (
    <div className="vendor-item-header">
      <img
        className="vendor-item-header__cover"
        src={backgroundImage}
        alt={title}
        width={72}
        height={72}
      />
      <div className="vendor-item-header__logo">
        <img
          className="vendor-item-header__logoImage"
          src={logo}
          alt={title}
          width={72}
          height={72}
        />
      </div>
      {best_coupon && (
        <i
          className={classNames("vendor-item-header__coupon", {
            "vendor-item-header__coupon--primary": is_pro,
          })}
        >
          {best_coupon}
        </i>
      )}
    </div>
  );
};
