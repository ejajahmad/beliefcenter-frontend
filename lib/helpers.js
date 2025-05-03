export const getDirectusImageUrl = (key) => {
  if (!key) return ""; 
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${key}`;
};

// format thousands, millions, billions, etc. like youtube views k, m, b
export function formatLargeNumbers(number) {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (number >= 1e6) {
    return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (number >= 1e3) {
    return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return number;
}