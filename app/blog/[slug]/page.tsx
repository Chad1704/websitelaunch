export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { default: Post } = await import(`./posts/${slug}.mdx`);
  return (
    <>
      <div className="prose dark:prose-invert max-w-none px-4 py-8">
        <Post />
      </div>
    </>
  );
}
