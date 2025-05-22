import PostLayout from "../../postLayout";
import Header from "../../header";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postModule = await import(`./posts/${slug}.mdx`);
  const Post = postModule.default;
  const metadata = postModule.metadata;

  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-span-12">
          <PostLayout tags={metadata.tags} title={metadata.title}>
            <Post />
          </PostLayout>
        </div>
      </div>
    </>
  );
}
