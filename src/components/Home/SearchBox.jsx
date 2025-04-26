import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg px-4 py-3">
      <FiSearch className="text-gray-400 text-lg mr-2" />
      <input
        type="text"
        placeholder="Search news..."
        className="w-full outline-none text-gray-700 placeholder:text-gray-400 text-sm"
      />
    </div>
  );
}
