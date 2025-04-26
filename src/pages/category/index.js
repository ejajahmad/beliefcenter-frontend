import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import Link from "next/link";
import React from "react";

function PostCategory() {
  return (
    <>
      <section className="section bg-blue-100">
        <Container>
          <div className="text-center">
            <h1 className="font-bold text-lg lg:text-2xl">Exam News</h1>
            <p className="text-sm text-gray-600">
              Explore posts under Exam News
            </p>
          </div>
        </Container>
      </section>
      <Container>
        <div className="flex items-center gap-1 py-4 text-sm">
        <Link href="/category" className="text-blue-600 font-bold">
         Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400"> Exam News</span>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 pb-10">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </Container>
    </>
  );
}

export default PostCategory;
