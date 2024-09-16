import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2013 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Software Engineering"
            subTitle="International Islamic University (2017 - 2021)"
            // result="3.90/4"
            des="Provided a strong foundation in software development, design, and testing methodologies. It covered core subjects such as algorithms, databases, object-oriented programming, and software project management, preparing graduates for diverse roles in the software industry."
          />
          <ResumeCard
            title="Intermediate - Pre-Engineering"
            subTitle="FBISE (2015 - 2017)"
            // result="4.75/5"
            des="Foundational subjects like mathematics, physics, and chemistry, equipping students with analytical and problem-solving skills. This program is designed to prepare students for engineering and technical disciplines at the university level."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="FBISE (2013 - 2015)"
            // result="5.00/5"
            des="Focused on core subjects such as mathematics, science, and English, providing a well-rounded academic foundation. It aimed to prepare students for higher secondary education in specialized fields like engineering, medicine, or commerce."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Xeven Solutions - (2022 - Present)"
            result="Lahore, Pakistan"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Altegon - (2021 - 2022)"
            result="Islamabad, Pakistan"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="MERN Stack Developer"
            subTitle="Self Employed - (2020 - Present)"
            result="Remote"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
