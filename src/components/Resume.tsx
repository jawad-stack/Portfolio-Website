import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievement from "./Achievement";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<boolean>(true);
  const [skillData, setSkillData] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<boolean>(false);
  const [coursesData, setCoursesData] = useState<boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => {
                setEducationData(true);
                setSkillData(false);
                setExperienceData(false);
                setCoursesData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setExperienceData(false);
                setCoursesData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(true);
                setCoursesData(false);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(false);
                setExperienceData(false);
                setCoursesData(true);
              }}
              className={`${
                coursesData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Courses
            </li>
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {coursesData && <Achievement />}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
