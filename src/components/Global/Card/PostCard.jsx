import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdVerified } from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";

export default function PostCard() {
  return (
    <div className="rounded-lg shadow-md overflow-hidden relative">
      <Link href="#" className="absolute inset-0 z-10"></Link>
      <Image
        src="/images/2w2.jpeg"
        alt="Post"
        width={410}
        height={200}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="p-3 md:p-4">
        <h2 className="text-base font-bold truncate">
          {" "}
          AP Class 10 Results 2025 Live: 81.14% Pass, Revaluation Details Here
        </h2>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs bg-light-blue px-2 py-0.5 rounded-lg">
            Exam News
          </span>
          <span className="text-sm text-light">March 20, 2025 . 1K Views</span>
        </div>
        <p className="text-sm my-6">
          BSEAP has announced the AP SSC 10th Result 2025. 81.14% of students
          passed. Check district-wise stats, gender performance, revaluation
          and...
        </p>
        <div className="border-t border-gray-300 mt-4">
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2 items-center">
              <Image
                src="/images/2w2.jpeg"
                alt="Author"
                width={30}
                height={30}
                style={{ width: "30px", height: "30px" }}
                className="rounded-full"
              />
              <div>
                <h6 className="text-sm font-semibold">John Doe</h6>
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
