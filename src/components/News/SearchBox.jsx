import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBox() {
  return (
    <div className="relative">
      <FiSearch className="text-gray-400 text-lg absolute top-3 left-3" />
      <input
        type="text"
        placeholder="Search..."
        className="formcontrol pl-10!"
      />
    </div>
  );
}
