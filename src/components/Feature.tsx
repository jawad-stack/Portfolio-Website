import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Portfolio Websites"
            des="Developing beautiful and appealing cross-browser and mobile-friendly designs that adapt to various screen sizes."
            icon={null}
          />
          <Card
            title="Full-Stack Web Development"
            des="Building responsive, dynamic web applications using MongoDB, Express.js, React.js, and Node.js."
            icon={<AiFillAppstore />}
          />
          <Card
            title="Frontend Development"
            des="Crafting interactive, user-friendly, and scalable interfaces with React.js."
            icon={<SiProgress />}
          />
          <Card
            title="Backend Development"
            des="Developing scalable server-side applications and APIs with Node.js and Express.js."
            icon={<FaMobile />}
          />
          <Card
            title="Responsive Web Design"
            des="Ensuring cross-browser and mobile-friendly designs that adapt to various screen sizes."
            icon={<SiAntdesign />}
          />
          <Card
            title="API Development and Integration"
            des="Designing and integrating RESTful APIs to enable seamless data communication between client and server."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
