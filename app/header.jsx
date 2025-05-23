// components/Header.tsx
import ColorTester from "./colortester";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Header() {
  return (
    <div className="grid grid-cols-12 sticky top-0 z-50">
      <div className="h-fit w-fit pl-15 pt-15 col-start-1"></div>

      <div className="h-fill col-start-10 card-head-side-l col-span-3 ml-1 bg-dark transition duration-400 ease-in-out">
        <ColorTester />
        <div className="flex items-end">
          <IoIosArrowRoundBack className="text-5xl text-light" />
          <div className="by7 text-3xl ml-4 w-fill transition duration-400 ease-in-out text-light">
            Article Tree
          </div>
        </div>
      </div>
    </div>
  );
}
