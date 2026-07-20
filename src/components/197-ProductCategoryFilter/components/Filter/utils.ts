export const sortBasedOnPrice = ({value, products, list}: any) => {
  if (value === "highprice") {
    return products.sort((a: any, b: any) => b.price - a.price);
  }
  
  if (value === "lowprice") {
    return products.sort((a: any, b: any) => a.price - b.price);
  }

  return list;
}
