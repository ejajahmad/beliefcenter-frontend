import React from "react";

export default function NameAvatar({ name, width, height }) {
  return (
    <div
      className="flex items-center gap-2"
      style={{
        width: width || "auto",
        height: height || "auto",
      }}
    >
      <div className="rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-semibold">
        {name.charAt(0).toUpperCase()}
      </div>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  );
}
