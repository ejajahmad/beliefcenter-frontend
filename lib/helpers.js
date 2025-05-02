export const getDirectusImageUrl = (key) => {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${key}`;
};
