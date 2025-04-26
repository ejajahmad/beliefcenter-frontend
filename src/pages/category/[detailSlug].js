import Container from "@/components/Global/Container";
import PostDetail from "@/components/PostDetail/PostDetail";
import Link from "next/link";
import React from "react";

function Details() {
  return (
    <>
      <div className="py-3 bg-blue-100">
        <Container>
          <ul className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-500 hover:underline">
              Home{" "}
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/category" className="text-blue-500 hover:underline">
              Category{" "}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-500">Details</span>
          </ul>
        </Container>
      </div>
      <PostDetail />
    </>
  );
}

export default Details;
