import PostLayout from "../../postLayout";
import Header from "../../header"; // adjust path as needed
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postModule = await import(`../../../posts/${slug}.mdx`);

  const Post = postModule.default;
  const metadata = postModule.metadata;

  return (
    <div className="transition duration-400 ease-in-out bg-dark ">
      <Header />

      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-12">
          <PostLayout
            tags={metadata.tags}
            title={metadata.title}
            date={metadata.date}
            time={metadata.time}
          >
            <Post />
          </PostLayout>
        </div>
      </div>
    </div>
  );
}
