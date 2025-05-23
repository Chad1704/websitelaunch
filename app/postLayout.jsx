"use client";
import React, { useMemo } from "react";
import "./blog/blog.css";
import { FaTag, FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import ColorTester from "./colortester";

function extractHeadings(children) {
  const headings = [];

  function traverse(nodes) {
    React.Children.forEach(nodes, (child) => {
      if (!child) return;

      if (typeof child.type === "string") {
        const tag = child.type.toLowerCase();
        if (tag === "h1" || tag === "h2" || tag === "h3") {
          const id = child.props.id || "";
          let text = "";

          // Extract text content from the heading's children
          if (typeof child.props.children === "string") {
            text = child.props.children;
          } else if (Array.isArray(child.props.children)) {
            text = child.props.children
              .map((c) => (typeof c === "string" ? c : ""))
              .join("");
          }
          headings.push({
            id,
            text,
            level: tag === "h1" ? 1 : tag === "h2" ? 2 : 3,
          });
        }
      }

      if (child.props?.children) {
        traverse(child.props.children);
      }
    });
  }

  traverse(children);
  return headings;
}

export default function PostLayout({ children, tags = [], title, date, time }) {
  // Memoize heading extraction so it only recalculates when children change
  const headings = useMemo(() => extractHeadings(children), [children]);

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
                className="inline-flex px-2 mr-2 mb-2 rounded-full border border-light text-light text-sm font-mono transition duration-400 ease-in-out"
              >
                #{tag}
              </div>
            ))}
          </div>

          {children}
        </div>
      </article>
      <div className="col-span-3 card-head-side-l flex flex-col ml-1  space-y-2">
        <div className=" sticky-sidebar-head ">
          <div className="grid grid-cols-6 grid-rows-6">
            <div className=" col-start-1 row-start-1 pt-3 pl-3 col-span-2 ">
              <IoIosArrowRoundBack className=" text-5xl" />
            </div>
          </div>
        </div>

        <aside className="sticky-sidebar h-fit">
          <div className="by7 text-3xl ml-4 pb-4">Article Tree</div>
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-light treeBar py-1.5 mr-1 block"
              style={{
                paddingLeft: level === 2 ? "1rem" : level === 3 ? "3rem" : "0",
              }}
            >
              {text}
            </a>
          ))}
        </aside>
      </div>
    </div>
  );
}
