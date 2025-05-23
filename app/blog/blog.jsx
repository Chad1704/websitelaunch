// app/blog/page.jsx
import { getAllPosts } from "../getPosts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-dark min-h-screen h-fit grid grid-rows-12 grid-cols-12">
      <div className="col-start-3 row-start-2 col-span-8">
        <div className="by7 text-3xl text-light">Blog</div>
        <div className="font-mono text-light opacity-80">
          Project updates and overall thoughts
        </div>
      </div>

      <div className="col-start-3 row-start-4 col-span-8 row-span-8 bg-amber-400 p-4 space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white text-black p-4 rounded shadow"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.date}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
