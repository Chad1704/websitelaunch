import Link from "next/link";
import ColorTester from "./colortester";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Header() {
  return (
    <div className="grid grid-cols-12 sticky top-0 z-50 transition duration-400 ease-in-out ">
      <div className="col-start-10 card-head-side-l  col-span-3 ml-1 transition duration-400 ease-in-out h-20">
        <ColorTester />

        <div className="px-3 py-4">
          <Link href="/blog" className="big-button ">
            <div className="flex border rounded-2xl bg-dark  border-light cursor-pointer items-center px-2 py-1  hover:bg-light hover:text-dark text-light transition duration-400 ease-in-out ">
              <IoIosArrowRoundBack className="text-5xl  " />
              <div className="flex justify-center items-center w-full">
                <div className="  font-mono text-md pl-2">GO BACK</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-end pl-2">
          <div className="by7 text-3xl ml-4 w-fill transition duration-400 ease-in-out text-light">
            Article Tree
          </div>
        </div>
      </div>
    </div>
  );
}
