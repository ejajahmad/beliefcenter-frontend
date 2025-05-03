import axios from "axios";

export const GetAllNewsSlugs = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_post?fields[]=slug`);
  return response.data;
};

export const GetNewsBySlug = async (slug) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/blog_post`, {
    params: {
      filter: { slug: slug },
      fields: "*,author.*, faq.question,faq.answer,category.name,category.slug,featured_image.id,featured_image.width,featured_image.height",
    },
  });
  return response;
};

// Get Blog Category by slug
export const GetNewsCategoryBySlug = async (slug) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/categories`, {
    params: {
      fields: "name, slug, meta_title, meta_description",
      filter: { slug: slug },
    },
  });
  return response;
};
