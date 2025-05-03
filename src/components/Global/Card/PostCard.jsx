import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import { formatLargeNumbers, getDirectusImageUrl } from "../../../../lib/helpers";
import moment from "moment";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <div className="rounded-lg shadow-md overflow-hidden relative">
      <Link href={`/news/${post.slug}`}>
        <div className="h-[250px] overflow-hidden">
          <Image
            src={getDirectusImageUrl(post.featured_image)}
            alt="Post"
            width={410}
            height={200}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </Link>
      <div className="p-3 md:p-4">
        <Link href={`/news/${post.slug}`}>
          <h2 className="text-base font-bold truncate">{post.title}</h2>
        </Link>
        <div className="flex items-center justify-between mt-4">
          <Link href={`/news/category/${post.category.slug}`}>
            <span className="text-xs bg-light-blue px-2 py-0.5 rounded-lg">Exam News</span>
          </Link>
          <span className="text-sm text-light">
            {moment(post.date_created).format("MMM Do YYYY")} . {formatLargeNumbers(post.views)} Views
          </span>
        </div>
        <p className="text-sm my-6">{post.description.length > 100 ? post.description.slice(0, 100) + "..." : post.description}</p>
        <div className="border-t border-gray-300 mt-4">
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2 items-center">
              {post.author?.avatar ? (
                <Image src={getDirectusImageUrl(post.author.avatar)} alt="Author" width={40} height={40} className="rounded-full" />
              ) : (
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center ">
                  {post.author?.first_name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <h6 className="text-sm font-semibold">
                  {post.author?.first_name} {post.author?.last_name}
                </h6>
                <h6 className="text-xs flex gap-1 items-center font-semibold text-primary">
                  <MdVerified size={15} /> Verified
                </h6>
              </div>
            </div>
            <span className="text-secondary text-sm flex items-center bg-light-blue px-2 py-1 rounded">
              Read More <FiChevronsRight className="mt-0.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
