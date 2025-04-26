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
        <h2 className="font-bold truncate">
          {" "}
          AP Class 10 Results 2025 Live: 81.14% Pass, Revaluation Details Here
        </h2>
        <div className="flex items-center justify-between my-4">
          <span className="text-xs bg-blue-100 px-2 py-0.5 rounded-lg">
            Exam News
          </span>
          <span className="text-sm">March 20, 2025 . 1K Views</span>
        </div>
        <p>
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
                <h6 className="text-xs flex gap-1 items-center text-blue-600">
                  <MdVerified /> Verified
                </h6>
              </div>
            </div>
            <span className="font-bold text-blue-600 text-sm flex items-center">
              read more <FiChevronsRight className="mt-0.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
