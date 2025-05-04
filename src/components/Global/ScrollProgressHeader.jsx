import React from 'react';
import SocialShareButton from './SocialShareButton';

export default function ScrollProgressHeader({ post, scrollProgress }) {
  if (scrollProgress <= 10) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm p-3 flex items-center justify-between">
      <h2 className="text-base truncate mb-0">{post.title}</h2>

      <div className="hidden md:flex items-center gap-3 text-sm">
       <SocialShareButton />
      </div>

      <div
        style={{
          width: `${scrollProgress}%`,
          height: "3px",
          backgroundColor: "#ff9351",
          position: "absolute",
          bottom: 0,
          left: 0,
          transition: "width 0.2s ease-in-out",
        }}
      />
    </div>
  );
}
