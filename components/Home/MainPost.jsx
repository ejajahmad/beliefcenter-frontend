import React from 'react';

export default function MainPost() {
    return (
        <div className="rounded-xl overflow-hidden shadow-sm relative max-w-3xl mx-auto mt-5git git">
            {/* Image */}
            <img
                src="/images/2w2.jpeg"
                alt="Main Post"
                className="w-full h-auto object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 top-0 left-0 w-full bg-blue-800/90 text-white p-4 flex items-end ">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
                        Featured
                    </span>
                    <span className="text-sm">March 22, 2025</span>
                </div>

                <h2 className="text-base sm:text-lg font-semibold leading-tight">
                    Top 10 PU Colleges in Punjab 2025–26 – Best PU Colleges Ranked
                </h2>
            </div>
        </div>
    );
}
