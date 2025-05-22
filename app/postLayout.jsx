"use client";
import React from "react";
import "./blog/blog.css";

export default function PostLayout({ children, tags = [], title }) {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-dark text-light transition duration-400 ease-in-out">
      <article className="prose col-span-9 lg:prose-xl">
        <div className="px-20 pt-10 blog-post">{children}</div>
      </article>

      <div className="col-span-3 card-head-side-l">
        <aside className="  p-6 bg-red-500 h-fit">
          <h3 className="text-xl font-bold mb-2">Tags</h3>
          <div className=" text-sm text-gray-300">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-3 py-1 mr-2 mb-2 rounded-full border border-light text-light text-sm pluto transition duration-400 ease-in-out"
              >
                {tag}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
