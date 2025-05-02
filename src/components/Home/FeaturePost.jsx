"use client";

import { useEffect, useState } from "react";
import { readItems } from "@directus/sdk";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import directusClient from "../../../lib/directus-client";
import { getDirectusImageUrl } from "../../../lib/helpers";

export default function NewFeaturedPosts() {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    async function fetchFeaturedPosts() {
      try {
        const response = await directusClient.request(
          readItems("blog_config", {
            fields: ["featured_posts.blog_post_id.*"],
            limit: 1,
          })
        );

        const posts = response?.featured_posts?.map((item) => item.blog_post_id).filter(Boolean) || [];
        console.log("Featured Posts:", posts);
        setFeaturedPosts(posts);
      } catch (error) {
        console.error("Error fetching featured posts:", error);
      }
    }

    fetchFeaturedPosts();
  }, []);

  if (!featuredPosts.length) return null;

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Featured Post */}
        <div className="lg:w-2/3">
          <FeaturedPost post={featuredPosts[0]} />
        </div>

        {/* Side Posts */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {featuredPosts.slice(1, 4).map((post) => (
            <SidePost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FeaturedPost = ({ post }) => (
  <Link href={`/news/${post.slug}`} className="group block relative rounded-xl overflow-hidden">
    <div className="relative w-full h-[400px]">
      <Image src={getDirectusImageUrl(post.featured_image)} alt={post.title} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 to-transparent" />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 z-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">Featured</span>
        <span className="text-white text-sm">{moment(post.date_created).format("MMMM DD, YYYY")}</span>
      </div>
      <h2 className="text-white text-xl font-semibold">{post.title}</h2>
    </div>
  </Link>
);

const SidePost = ({ post }) => (
  <Link href={`/news/${post.slug}`} className="group flex items-center gap-4">
    <div className="relative w-[150px] h-[100px] rounded-lg overflow-hidden shrink-0">
      <Image src={getDirectusImageUrl(post.featured_image)} alt={post.title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-sm text-gray-500">{moment(post.date_created).format("MMMM DD, YYYY")}</span>
      <h3 className="text-base font-semibold text-gray-900">{post.title}</h3>
    </div>
  </Link>
);
