import Blog from "../blog";
import PostLayout from "../../postLayout";

import Header from "../../header";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { default: Post } = await import(`./posts/${slug}.mdx`);
  return (
    <>
      <Header />

      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-12 ">
          <PostLayout>
            <Post />
          </PostLayout>
        </div>
      </div>
    </>
  );
}
