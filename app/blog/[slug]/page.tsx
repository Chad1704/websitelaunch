import Blog from "../blog";
import ColorTester from "../../colortester";
import Header from "../../header";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { default: Post } = await import(`./posts/${slug}.mdx`);
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 ">
        <div className="row-start-1 col-start-1 row-span-11 col-span-12 bg-amber-400">
          <Header />
        </div>
        <div className="  bg-light">
          <Post />
          <ColorTester />
        </div>
      </div>
    </>
  );
}
