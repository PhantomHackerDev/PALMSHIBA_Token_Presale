export function numberWithCommas(x: any) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getEllipsis = (address: string, left = 6, right = 4) => {
  if (!address) return;
  return (
    address.slice(0, left) + "..." + address.substring(address.length - right)
  );
};
