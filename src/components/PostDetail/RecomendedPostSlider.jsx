import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

export default function RecomendedPostSlider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        600: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="pb-12!"
    >
      <SwiperSlide className="bg-white rounded-lg border border-gray-300">
        <Image
          src="/images/2w2.jpeg"
          width={1280}
          height={720}
          alt="Post"
          className="rounded-t-lg mb-4"
        />
        <div className="px-3 pb-3">
          <p className="text-gray-600 lg:text-lg mb-3">
            Top Courses After 12th Science | Career Options & Streams 2025
          </p>
          <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md cursor-pointer flex items-center gap-1 justify-center">
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white rounded-lg border border-gray-300">
        <Image
          src="/images/2w2.jpeg"
          width={1280}
          height={720}
          alt="Post"
          className="rounded-t-lg mb-4"
        />
        <div className="px-3 pb-3">
          <p className="text-gray-600 lg:text-lg mb-3">
            Top Courses After 12th Science | Career Options & Streams 2025
          </p>
          <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md cursor-pointer flex items-center gap-1 justify-center">
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white rounded-lg border border-gray-300">
        <Image
          src="/images/2w2.jpeg"
          width={1280}
          height={720}
          alt="Post"
          className="rounded-t-lg mb-4"
        />
        <div className="px-3 pb-3">
          <p className="text-gray-600 lg:text-lg mb-3">
            Top Courses After 12th Science | Career Options & Streams 2025
          </p>
          <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md cursor-pointer flex items-center gap-1 justify-center">
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white rounded-lg border border-gray-300">
        <Image
          src="/images/2w2.jpeg"
          width={1280}
          height={720}
          alt="Post"
          className="rounded-t-lg mb-4"
        />
        <div className="px-3 pb-3">
          <p className="text-gray-600 lg:text-lg mb-3">
            Top Courses After 12th Science | Career Options & Streams 2025
          </p>
          <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md cursor-pointer flex items-center gap-1 justify-center">
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-white rounded-lg border border-gray-300">
        <Image
          src="/images/2w2.jpeg"
          width={1280}
          height={720}
          alt="Post"
          className="rounded-t-lg mb-4"
        />
        <div className="px-3 pb-3">
          <p className="text-gray-600 lg:text-lg mb-3">
            Top Courses After 12th Science | Career Options & Streams 2025
          </p>
          <button className="bg-blue-100 text-blue-600 font-bold w-full text-sm p-2 rounded-md cursor-pointer flex items-center gap-1 justify-center">
            See More <FaChevronRight size={12} />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
