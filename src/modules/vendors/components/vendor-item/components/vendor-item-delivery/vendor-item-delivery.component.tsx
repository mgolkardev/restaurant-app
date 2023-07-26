import { formatMoney } from "../../../../../shared/helpers/number.helper";
import "./vendor-item-delivery.component.style.scss";
import { ClockIcon } from "@heroicons/react/24/outline";
import { VendorItemDeliveryProperties } from "./vendor-item-delivery-properties.interface";

export const VendorItemDelivery = ({
  isZFExpress,
  deliveryFee,
  max_eta,
}: VendorItemDeliveryProperties) => {
  return (
    <div className="vendor-item-delivery">
      <span>
        <span className="vendor-item-delivery__title">
          {isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}
        </span>
        <span>
          {deliveryFee > 0 ? `${formatMoney(deliveryFee)} تومان` : "رایگان"}
        </span>
      </span>
      <span className="vendor-item-delivery__estimate">
        {max_eta > -1 ? (
          <>
            تا {max_eta} دقیقه
            <ClockIcon width={12} />
          </>
        ) : undefined}
      </span>
    </div>
  );
};
