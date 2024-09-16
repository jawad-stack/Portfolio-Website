import { HiArrowCircleDown } from "react-icons/hi";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <>
    <section
      id="home"
      className="pointer-events-none w-full pt-6 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-700"
    >
      <LeftBanner />
      <RightBanner />
    </section>
    <Link
                activeClass="active"
                to={"feature"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="h-screen absolute top-0 z-10 pointer-events-auto cursor-pointer flex justify-center"
              >
    <HiArrowCircleDown size={60} />
              </Link>

      </>
  );
};

export default Banner;
