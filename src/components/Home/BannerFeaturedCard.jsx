import React from "react";
import { FaBriefcase } from "react-icons/fa6";
import { RiShakeHandsLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Link from "next/link";

const features = [
    { title: "Admission News", icon: <FaBriefcase className="text-red-500" />, bg: "bg-red-100" },
    { title: "Trending News", icon: <FaBriefcase className="text-gray-600" />, bg: "bg-gray-100" },
    { title: "Job Opportunities", icon: <RiShakeHandsLine className="text-yellow-600" />, bg: "bg-yellow-100" },
    { title: "College News", icon: <FaUniversity className="text-purple-600" />, bg: "bg-purple-100" },
    { title: "Exam News", icon: <FaBriefcase className="text-pink-500" />, bg: "bg-pink-100" },
    { title: "Success Stories", icon: <FaBriefcase className="text-red-500" />, bg: "bg-red-100" },
    { title: "Scholarships", icon: <FaBriefcase className="text-green-500" />, bg: "bg-green-100" },
    { title: "Career", icon: <GoGoal className="text-blue-500" />, bg: "bg-blue-100" },
];

export default function BannerFeaturedCard() {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-5 text-center">
            {features.map((data, index) => (
                <div
                    key={index}
                    className="relative w-[100px] h-[100px] rounded-lg border border-gray-200 flex flex-col items-center justify-center hover:scale-108 transition px-2"
                >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${data.bg}`}>
                        {data.icon}
                    </div>
                    <p className="text-xs font-semibold leading-tight">{data.title}</p>
                    <Link href={`#`} className="absolute w-full h-full top-0 start-0"></Link>
                </div>
            ))}
        </div>
    );
}
