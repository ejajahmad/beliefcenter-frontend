import Image from "next/image";
import React from "react";
import Container from "../Global/Container";

export default function FeaturePost() {
  return (
    <Container>
      <div className="lg:flex items-center">
        <div className="rounded-xl overflow-hidden shadow-sm relative lg:w-3/5">
          <Image
            src="/images/2w2.jpeg"
            alt="Main Post"
            width={500}
            height={300}
            style={{ width: "100%", height: "auto" }}
            objectFit="cover"
            priority
          />
          <div className="absolute top-0 start-0 flex items-end h-full w-full text-white p-4 bg-[linear-gradient(0deg,_rgba(0,80,201,0.765)_0%,_rgba(0,0,0,0)_100%)]">
            <div>
              <div className="space-x-2 mb-2">
                <span className="bg-orange-500 text-white text-xs font-semibold px-2 pb-0.5 rounded-xl">
                  Featured
                </span>
                <span className="text-sm">March 22, 2025</span>
              </div>
              <h2 className="text-base sm:text-lg font-semibold">
                Top 10 PU Colleges in Punjab 2025–26 – Best PU Colleges Ranked
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 lg:ps-6 pt-4 ">
          <div className="flex gap-2 sm:gap-4 items-center mb-4 lg:mb-6">
            <Image src="/images/2w2.jpeg" alt="Post" className="rounded-md" width={150} height={100} />
            <div>
                <span className="text-sm">March 20, 2025</span>
              <h2 className="font-bold">
                Top 10 PU Colleges in Punjab 2025–26 – Best PU Colleges Ranked
              </h2>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center mb-4 lg:mb-6">
            <Image src="/images/2w2.jpeg" alt="Post" className="rounded-md" width={150} height={100} />
            <div>
                <span className="text-sm">March 20, 2025</span>
              <h2 className="font-bold">
                Top 10 PU Colleges in Punjab 2025–26 – Best PU Colleges Ranked
              </h2>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-4 items-center mb-4 lg:mb-6">
            <Image src="/images/2w2.jpeg" alt="Post" className="rounded-md" width={150} height={100} />
            <div>
                <span className="text-sm">March 20, 2025</span>
              <h2 className="font-bold">
                Top 10 PU Colleges in Punjab 2025–26 – Best PU Colleges Ranked
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
