import React, { useEffect, useState } from "react";
import Container from "../Global/Container";
import PostCard from "../Global/Card/PostCard";
import directusClient from "../../../lib/directus-client";
import { readItems } from "@directus/sdk";

export default function PostGrid() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 6;

  const fetchPosts = async (pageNum) => {
    setLoading(true);
    try {
      const response = await directusClient.request(
        readItems("blog_post", {
          fields: ["id", "title", "slug", "author.*", "description", "views", "featured_image", "category.name", "category.slug", "date_created"],
          limit,
          filter: { status: { _eq: "published" } },
          sort: "-date_created",
          page: pageNum,
        })
      );
      if (response.length < limit) setHasMore(false);
      setPosts((prevPosts) => [...prevPosts, ...response]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPosts(nextPage);
  };
  return (
    <section className="section">
      <Container>
        <h2 className="headingSecondary mb-4">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.length > 0 ? posts.map((post) => <PostCard key={post.id} post={post} />) : <p>No posts found</p>}
        </div>

        {loading && <p className="text-center mt-4">Loading...</p>}
        {!loading && hasMore && (
          <div className="text-center mt-8">
            <button onClick={loadMore} className="bg-blue-100 px-6 py-2 text-blue-600 font-bold rounded-lg cursor-pointer">
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
