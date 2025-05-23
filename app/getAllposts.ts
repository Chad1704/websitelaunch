// lib/getAllPosts.ts
import fs from "fs";
import path from "path";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const metadataMatch = fileContent.match(
        /export const metadata = ({[\s\S]*?})/
      );
      const metadata = metadataMatch ? eval(`(${metadataMatch[1]})`) : {};

      return {
        slug,
        ...metadata,
      };
    });
}
