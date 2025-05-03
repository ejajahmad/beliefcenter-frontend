import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import directusClient from "../../../lib/directus-client";
import { readItems } from "@directus/sdk";
import { getDirectusImageUrl } from "../../../lib/helpers";
import Link from "next/link";

export default function RecomendedPostSlider({ post }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post?.category?.slug) return; // Prevent fetching if category slug is undefined

    setLoading(true);

    const fetchPosts = async () => {
      try {
        // Fetch posts from the same category excluding the current post
        const categoryPosts = await directusClient.request(
          readItems("blog_post", {
            fields: ["id", "title", "slug", "description", "featured_image.id", "featured_image.width", "featured_image.height"],
            sort: "-date_created",
            filter: {
              _and: [{ category: { slug: { _eq: post.category.slug } } }, { id: { _neq: post.id } }],
            },
            limit: 6,
          })
        );

        let combinedPosts = categoryPosts;

        // If there are fewer than 6 posts in the same category, fetch additional latest posts
        if (categoryPosts.length < 6) {
          const additionalPosts = await directusClient.request(
            readItems("blog_post", {
              fields: ["id", "title", "slug", "description", "featured_image.id", "featured_image.width", "featured_image.height"],
              sort: "-date_created",
              filter: {
                id: { _nin: [post.id, ...categoryPosts.map((p) => p.id)] },
              },
              limit: 6 - categoryPosts.length,
            })
          );

          combinedPosts = [...categoryPosts, ...additionalPosts];
        }

        setPosts(combinedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [post?.category?.slug, post?.id]);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="pb-12!"
    >
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <SwiperSlide key={post.id} className="h-full">
            <div className="flex flex-col justify-between h-full bg-white rounded-lg border border-gray-300 overflow-hidden">
              <div>
                <Image src={getDirectusImageUrl(post.featured_image.id)} width={1280} height={720} alt="Post" className="w-full h-40 object-cover" />
                <div className="px-3 py-4">
                  <p className="text-gray-700 text-base font-semibold line-clamp-2">{post.title}</p>
                </div>
              </div>
              <div className="px-3 pb-4 mt-auto">
                {/* <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md flex items-center gap-1 justify-center">
                  See More <FaChevronRight size={12} />
                </button> */}
                <Link
                  href={`/news/${post.slug}`}
                  className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md flex items-center gap-1 justify-center"
                >
                  See More <FaChevronRight size={12} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">No recommended posts available.</p>
        </div>
      )}
    </Swiper>
  );
}
