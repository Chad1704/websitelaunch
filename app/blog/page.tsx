import Blog from "./blog";
import Header from "../header";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Header />
          <Blog />
        </div>
      </main>
    </>
  );
}
