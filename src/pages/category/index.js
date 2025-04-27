import Breadcrumb from "@/components/Global/Breadcrumb";
import PostCard from "@/components/Global/Card/PostCard";
import Container from "@/components/Global/Container";
import Link from "next/link";
import React from "react";

function PostCategory() {
  return (
    <>
      <section className="section bg-light-blue text-center">
        <Container>
          <h1 className="font-bold text-lg lg:text-2xl">Exam News</h1>
          <p>Explore posts under Exam News</p>
        </Container>
      </section>
      <Breadcrumb 
         items={
          [
            {label: 'Home', href: '/'},
            {label: 'Category'},
          ]
         }
        />
      <Container>
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
