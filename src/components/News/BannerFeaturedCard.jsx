"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBriefcase } from "react-icons/fa";
import { readItems } from "@directus/sdk";
import directusClient from "../../../lib/directus-client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BannerFeaturedCard() {
  const [categories, setCategories] = useState([]);

  const colors = [
    { bg: "bg-red-100", text: "text-red-500" },
    { bg: "bg-gray-200", text: "text-gray-600" },
    { bg: "bg-yellow-100", text: "text-yellow-600" },
    { bg: "bg-purple-100", text: "text-purple-600" },
    { bg: "bg-pink-100", text: "text-pink-500" },
    { bg: "bg-green-100", text: "text-green-500" },
    { bg: "bg-blue-100", text: "text-blue-600" },
    { bg: "bg-indigo-100", text: "text-indigo-600" },
  ];

  useEffect(() => {
    async function fetchFeaturedCategories() {
      try {
        const response = await directusClient.request(
          readItems("blog_config", {
            fields: ["featured_categories.categories_id.*"],
            limit: 1,
          })
        );

        const featured = response?.featured_categories || [];
        const extracted = featured.map((item) => item.categories_id).filter(Boolean);

        setCategories(extracted);
      } catch (error) {
        console.error("Error fetching featured categories:", error);
      }
    }

    fetchFeaturedCategories();
  }, []);

  return (
    <div className="mb-5 mx-auto xl:w-5xl">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          340: { slidesPerView: 3 },
          480: { slidesPerView: 5 },
          768: { slidesPerView: 6 },
          1200: { slidesPerView: 8 },
        }}
        style={{
          paddingBottom: "3rem",
        }}
      >
        {categories.map((category, index) => {
          const color = colors[index % colors.length];
          return (
            <SwiperSlide key={category.id} className="w-max mx-1 sm:mx-2 lg:mx-3">
              <div className="relative lg:w-[120px] h-[120px] rounded-lg border border-gray-200 flex flex-col items-center justify-start gap-2 text-center hover:scale-105 transition p-2 py-4">
                <div className={`min-w-12 min-h-12 flex items-center justify-center rounded-full ${color.bg}`}>
                  {category.icon ? (
                    <img src={category.icon} alt={category.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <FaBriefcase className={`${color.text}`} />
                  )}
                </div>
                <p className="text-xs font-semibold leading-tight text-center">{category.name}</p>
                <Link href={`/category/${category.slug}`} className="absolute w-full h-full top-0 start-0" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
