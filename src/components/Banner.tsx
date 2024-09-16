// import { HiArrowCircleDown } from "react-icons/hi";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
// import { Link } from "react-scroll";

const Banner = () => {
  return (
    <>
    <section
      id="home"
      className="pointer-events-none w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
    >
      <LeftBanner />
      <RightBanner />
    </section>
      </>
  );
};

export default Banner;
