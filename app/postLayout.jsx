"use client";
import React from "react";
import "./blog/blog.css";
import { FaTag, FaCalendarAlt, FaClock } from "react-icons/fa";

export default function PostLayout({ children, tags = [], title, date, time }) {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-dark text-light transition duration-400 ease-in-out">
      <article className="prose col-span-9 lg:prose-xl">
        <div className="px-20 pt-10 blog-post">
          <h1>{title}</h1>
          <div className="flex items-center gap-2 pluto">
            <FaCalendarAlt />
            <span>{date}</span>
            <FaClock />
            <span>{time} minutes</span>
          </div>

          <div className="pt-3 pb-10 ">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className=" inline-flex px-2 mr-2 mb-2 underline  text-light text-sm font-mono transition duration-400 ease-in-out"
              >
                #{tag}
              </div>
            ))}
          </div>

          {children}
        </div>
      </article>

      <div className="col-span-3 card-head-side-l pt-10 ">
        <aside className="h-fit grid grid-cols-3 grid-rows-3 ml-1 tags-b-border ">
          {/* Calendar Icon (Row 1) */}
          <div className="col-start-1 row-start-1 flex justify-center items-start h-full">
            <div className="card-arr-border-r backround-icon p-1.5 rounded-lg">
              <FaCalendarAlt className="text-3xl text-dark transition duration-400 ease-in-out" />
            </div>
          </div>
          {/* Test Text (next to Calendar Icon) */}
          <div className="col-start-2 row-start-1 col-span-5 flex items-start justify-start">
            <div className="text-sm text-light font-mono mt-1">
              Published on <br />
              {date}
            </div>
          </div>
          {/* Clock Icon (Row 2) */}
          <div className="col-start-1 row-start-2 flex justify-center items-start h-full">
            <div className="card-arr-border-r backround-icon p-1.5 rounded-lg">
              <FaClock className="text-3xl text-dark transition duration-400 ease-in-out" />
            </div>
          </div>
          {/* Test Text (next to Clock Icon) */}
          <div className="col-start-2 row-start-2 col-span-5 flex items-start justify-start">
            <div className="text-sm text-light font-mono mt-1 mr-1">
              Read time: {time} minutes
            </div>
          </div>

          {/* Tag Icon (Row 3) */}
          <div className="col-start-1 row-start-3 flex justify-center items-start h-full">
            <div className="card-arr-border-r backround-icon p-1.5 rounded-lg">
              <FaTag className="text-3xl text-dark transition duration-400 ease-in-out" />
            </div>
          </div>
          {/* Tags (next to Tag Icon) */}
          <div className="col-start-2 row-start-3 col-span-5 flex justify-start flex-wrap">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                className="inline-flex px-2 mr-2 mb-2 rounded-full border border-light text-light text-sm font-mono transition duration-400 ease-in-out"
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
