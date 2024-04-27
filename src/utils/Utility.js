export const TruncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const ApplyDiscount = (price) => {
  const discount = 0.3; // 30% discount
  const discountedPrice = price * (1 - discount);
  return discountedPrice.toFixed(2);
};
