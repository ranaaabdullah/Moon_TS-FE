export const TruncateText = (text:string, maxLength:number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export const ApplyDiscount = (price:any) => {
  const discount = 0.3; // 30% discount
  const discountedPrice = price * (1 - discount);
  return discountedPrice.toFixed(2);
};
