"use client";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "app/blog/[slug]/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        date: data.date || "No date",
        ...data,
      };
    });

  return posts;
}
