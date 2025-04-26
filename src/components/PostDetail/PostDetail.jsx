import React, { useState } from "react";
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

export default function PostDetail() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Close if same index is clicked
  };

  return (
    <section className="section">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-2">
            <Image
              src="/images/2w2.jpeg"
              alt="Featured Image"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg mb-5"
            />
            <h1 className="headingPrimary mb-5">
              Navigating the New Job Market: Career Tips for Students After 12th
              Commerce
            </h1>
            <div className="flex items-center justify-between mb-6 text-sm font-bold text-gray-500">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/user.png"
                    width={30}
                    height={30}
                    alt="admin"
                    className="rounded-full"
                  />{" "}
                  By Admin
                </div>
                <div className="flex items-center gap-2">
                  <FaRegEye /> 13.6K views
                </div>
              </div>
              <div>24 Apr 2025</div>
            </div>
            <div className="border-b border-gray-300 mb-6 pb-6">
              <p>
                There are many options available for students finishing their
                12th grade in commerce as the global labor market continues to
                change. Rapid industry digitization, the emergence of new
                technologies, and changes in the economy have produced a dynamic
                environment with enormous possibilities as well as obstacles.
                Understanding these changes, acquiring the necessary abilities,
                and maintaining flexibility are the keys to success. After
                completing their 12th grade in commerce, students can use these
                crucial career recommendations to help them succeed in the
                modern employment market.
              </p>
            </div>
            <div className="border-b border-gray-300 mb-6 pb-6">
              <h2 className="headingSecondary mb-2">
                1. Explore Diverse Career Options
              </h2>
              <p>
                Students can pick from a wide range of job routes after
                completing their 12th grade in commerce. These choices extend
                beyond conventional positions in company management or
                accounting. There are currently more opportunities and new
                fields in the global job market than there were a few years ago.
                Among the well-known career choices are
              </p>
              <ol className="list-decimal ps-6 mt-4 space-y-3">
                <li>
                  Bachelor of Commerce (B.Com.)A flexible undergraduate degree
                  with several concentrations, including accounting, finance,
                  economics, and taxation. Ideal for students aiming for careers
                  in accounting, financial analysis, or taxation.
                </li>
                <li>
                  Bachelor of Business Administration (BBA) Designed for
                  students interested in leadership and management roles.
                  Develops skills in marketing, management, and business
                  operations. Also serves as a foundation for pursuing an MBA.
                </li>
                <li>
                  Chartered Accountancy (CA) One of the most prestigious career
                  options in India and globally for those interested in finance,
                  auditing, and accounting.
                </li>
                <li>
                  Company Secretary (CS)A great career path for individuals
                  interested in corporate law, compliance management, legal
                  documentation, and corporate governance.
                </li>
                <li>
                  LawA five-year integrated law degree is suitable for commerce
                  students who want to pursue careers in corporate law, legal
                  consulting, or become business legal advisors.
                </li>
                <li>
                  Banking and Financial Services Offers opportunities in
                  banking, investment analysis, and financial advisory. Growing
                  demand in both public and private sectors for skilled
                  professionals in this domain.
                </li>
                <li>
                  Digital Marketing An emerging and in-demand field due to the
                  rise of digital platforms. Career options include social media
                  management, SEO, content marketing, online advertising, and
                  data analytics.
                </li>
              </ol>
            </div>
            <div className="bg-slate-100 p-3 lg:p-4 rounded-lg mb-4 lg:mb-6">
              <h1 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <Accordion
                id={0}
                type={<FaStar />}
                title={`What is Tailwind CSS?`}
                content="Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
                isActive={activeIndex === 0}
                onToggle={handleToggle}
              />
              <Accordion
                id={1}
                type={<FaStar />}
                title="Can I use Tailwind with Next.js?"
                content="Absolutely! Tailwind works perfectly with Next.js by installing it via PostCSS or with the Tailwind CLI."
                isActive={activeIndex === 1}
                onToggle={handleToggle}
              />
              <Accordion
                id={2}
                type={<FaStar />}
                title="Is this accordion reusable?"
                content="Yes, you can pass different title and content to reuse the component multiple times."
                isActive={activeIndex === 2}
                onToggle={handleToggle}
              />
            </div>
            <div className="border border-gray-300 p-3 lg:p-4 rounded-lg shadow-md mb-4 lg:mb-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/user.png"
                    width={50}
                    height={50}
                    alt="admin"
                    className="rounded-full"
                  />{" "}
                  <div>
                    <h5 className="text-sm md:text-md lg:text-lg font-bold">
                      {" "}
                      By Admin
                    </h5>
                    <h6 className="font-bold text-xs md:text-sm text-gray-500">
                      Content Writer
                    </h6>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span>Follow: </span>
                  <span className="bg-sky-400 text-white p-2 rounded-full">
                    <FaTelegramPlane />
                  </span>
                  <span className="bg-black text-white p-2 rounded-full">
                    <FaXTwitter />
                  </span>
                  <span className="bg-green-500 text-white p-2 rounded-full">
                    <FaWhatsapp />
                  </span>
                  <span className="bg-blue-600 text-white p-2 rounded-full">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <p>
                Hello, I'm Neha — a Digital Marketing professional with a strong
                academic foundation from Laxmibai College, Delhi University, and
                specialized training from DIDM Institute. I focus on driving
                online growth through strategic SEO, engaging social media
                management, and impactful content creation.
              </p>
            </div>
          </div>
          <div className="">
            <Image
              src="/images/featur-img.png"
              alt="Featured Image"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg mb-5"
            />
            <div className="sticky top-2 border border-gray-300 rounded-lg shadow p-3 lg:p-4 xl:p-6">
              <div className="text-center mb-4">
                <h2 className="headingSecondary">Connect with <span className="text-blue-500">Expert</span></h2>
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
          <RecomendedPostSlider />
        </Container>
      </div>
    </section>
  );
}
