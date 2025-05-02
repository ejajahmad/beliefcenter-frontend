import Breadcrumb from "@/components/Global/Breadcrumb";
import Container from "@/components/Global/Container";
import PostDetail from "@/components/PostDetail/PostDetail";
import Link from "next/link";
import React from "react";

function Details() {
  return (
    <>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Category", href: "/category" },
              { label: "Navigating the New Job Market: Career Tips for Students After 12th Commerce"},
            ]}
          />
      <PostDetail />
    </>
  );
}

export default Details;
