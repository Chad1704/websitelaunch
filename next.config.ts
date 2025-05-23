import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug"; // add this import

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm], // add remarkSlug here
    rehypePlugins: [rehypeHighlight, rehypeSlug], // add rehypeSlug here
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
