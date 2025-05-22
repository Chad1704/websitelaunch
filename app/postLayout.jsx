"use client";
import React from "react";
import "./blog/blog.css";

export default function PostLayout({ children }) {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-dark text-light transition duration-400 ease-in-out">
      <article className="prose col-span-9 lg:prose-xl ">
        <div className="px-20 pt-10 blog-post">{children}</div>
      </article>
      <div className="col-span-3 card-head-side-l ">Info / Tree</div>
    </div>
  );
}
