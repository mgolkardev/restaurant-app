export const formatMoney = (
  value: number | string | undefined | null
): string => {
  if (value == null) {
    return "0";
  }

  if (typeof value !== "number") {
    value = parseFloat(value.toString());
  }

  return value.toLocaleString(undefined, {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
};
