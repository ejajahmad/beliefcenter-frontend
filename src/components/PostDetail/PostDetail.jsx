import React, { useEffect, useState } from "react";
import Container from "@/components/Global/Container";
import Image from "next/image";
import {
  FaRegEye,
  FaStar,
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Accordion from "../Global/Accordian/Accordion";
import RecomendedPostSlider from "./RecomendedPostSlider";
import PostForm from "../Global/Form/PostForm";
import { formatLargeNumbers, getDirectusImageUrl } from "../../../lib/helpers";
import moment from "moment";
import Breadcrumb from "../Global/Breadcrumb";
import NewsPostAdspace from "../News/NewsPostAdspace";
import ScrollProgressHeader from "../Global/ScrollProgressHeader";
import SocialShareButton from "../Global/SocialShareButton";

export default function PostDetail({ post }) {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if same index is clicked
  };

  return (
    <>
      <ScrollProgressHeader post={post} scrollProgress={scrollProgress} />
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white shadow-md lg:gap-6 lg:p-6 rounded-lg mb-6">
            <div className="col-span-2">
              <Image
                src={getDirectusImageUrl(post.featured_image.id)}
                alt="Featured Image"
                width={500}
                height={300}
                className="w-full h-auto lg:rounded-lg lg:mb-5"
              />
              <div className="px-4 pb-4 lg:px-0 lg:pb-0">
                <Breadcrumb
                  items={[
                    { label: "News", href: "/news" },
                    {
                      label: post.category.name,
                      href: `/news/category/${post.category.slug}`,
                    },
                    { label: post.title },
                  ]}
                />
                <h1 className="mb-2">{post.title}</h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 text-xs sm:text-sm">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-1 sm:gap-2">
                      {post?.author?.avatar ? (
                        <Image
                          src={getDirectusImageUrl(post?.author?.avatar?.id)}
                          width={50}
                          height={50}
                          alt="admin"
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                          {post?.author?.first_name?.charAt(0).toUpperCase()}
                          {post?.author?.last_name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      By{" "}
                      <span>
                        {post?.author?.first_name} {post?.author?.last_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegEye /> {formatLargeNumbers(post.views)} views
                    </div>
                  </div>
                  <div className="ps-9 sm:ps-0">
                    {moment(post.date_created).format("MMMM D, YYYY")}
                  </div>
                </div>
                <div className="border-b border-gray-300 mb-6 pb-6">
                  <div
                    id="NEWS_WRAPPER"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {post.faq?.length > 0 && (
                  <div className="bg-slate-100 p-3 lg:p-4 rounded-lg mb-4 lg:mb-6">
                    <h1 className="text-2xl font-bold mb-6">
                      Frequently Asked Questions
                    </h1>
                    {post.faq && post.faq.length > 0 ? (
                      post.faq.map((faq, index) => (
                        <Accordion
                          key={index}
                          id={index}
                          type={<FaStar />}
                          title={faq.question}
                          content={faq.answer}
                          isActive={activeIndex === index}
                          onToggle={handleToggle}
                        />
                      ))
                    ) : (
                      <p className="text-gray-500">
                        No FAQs available for this post.
                      </p>
                    )}
                  </div>
                )}
                <div className="border border-gray-300 p-3 lg:p-4 rounded-lg shadow-md mb-4 lg:mb-6">
                  <div className="sm:flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      {/* <Image src="/images/user.png" width={50} height={50} alt="admin" className="rounded-full" />{" "} */}
                      {post?.author?.avatar ? (
                        <Image
                          src={getDirectusImageUrl(post?.author?.avatar?.id)}
                          width={50}
                          height={50}
                          alt="admin"
                          className="rounded-full"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 font-semibold">
                          {post?.author?.first_name?.charAt(0).toUpperCase()}
                          {post?.author?.last_name?.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div>
                        <h5 className="text-sm md:text-md lg:text-lg font-bold">
                          By {post?.author?.first_name}{" "}
                          {post?.author?.last_name}
                        </h5>
                        <h6 className="font-bold text-xs md:text-sm text-gray-500">
                          {post?.author?.title}
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="">Follow: </span>
                      <SocialShareButton />
                    </div>
                  </div>
                  <p>
                    {post?.author?.description ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus."}
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-3">
                <NewsPostAdspace />
              </div>
              <div className="sticky top-14 border border-gray-300 rounded-lg shadow p-3 lg:p-4 xl:p-6">
                <div className="text-center mb-4">
                  <h2 className="headingSecondary">
                    Connect with <span className="text-blue-500">Expert</span>
                  </h2>
                  <p>Fill the form below and we will get back to you</p>
                </div>
                <PostForm />
              </div>
            </div>
          </div>
        </Container>
        <div className="section py-6! bg-slate-100">
          <Container>
            <h2 className="headingSecondary mb-4">Recommended for you</h2>
            <RecomendedPostSlider post={post} />
          </Container>
        </div>
      </section>
    </>
  );
}
