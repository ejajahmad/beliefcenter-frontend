import Link from "next/link";
import React from "react";
import Container from "./Container";

export default function Breadcrumb({ items = [] }) {
  return (
    <div className="py-3 text-sm">
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="text-secondary hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-light">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="px-1">{">"}</span>}
        </span>
      ))}
    </div>
  );
}
