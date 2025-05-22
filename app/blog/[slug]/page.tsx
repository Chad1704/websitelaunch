export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { default: Post } = await import(`./posts/${slug}.mdx`);
  return (
    <>
      IN A PAGE MENU
      <Post />
    </>
  );
}
