import React from "react";

// logos
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImg from "../../../assets/Images/TimelineImage.png";
import Img from "../../common/Img";
import { motion } from "framer-motion";
import { fadeIn } from "../../common/motionFrameVarients";

const timeline = [
  {
    logo: logo1,
    heading: "Leadership",
    desccription: "Fully committed to the success company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    desccription: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    desccription: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    desccription: "Code your way to a solution",
  },
];

function Timeline() {
  return (
    <div>
      <div className=" flex flex-col  lg:flex-row gap-15 items-center ">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className=" w-full lg:w-[45%] flex flex-col gap-5"
        >
          {timeline.map((i, index) => {
            return (
              <div className=" flex flex-row gap-6" key={index}>
                <div className=" w-[50px] h-[50px] rounded-full bg-richblue-500 flex justify-center items-center">
                  <img src={i.logo} alt="" />
                </div>
                <div>
                  <h2 className=" font-semibold text-[18px]">{i.heading}</h2>
                  <p className=" text-base">{i.desccription}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="relative shadow-blue-200"
        >
          <Img
            src={timelineImg}
            alt={timelineImg}
            className={`shadow-white object-cover h-fit scale-x-[-1] w-[550px]`}
          />
          <div className=" absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-3xl">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className="text-2xl lg:text-3 font-bold">10</p>
              <p className=" text-caribbeangreen-300 text-xs lg:text-sm">
                Years of Experience
              </p>
            </div>
            <div className="gap-5 flex items-center px-7">
              <p className="text-2xl lg:text-3 font-bold">250</p>
              <p className=" text-caribbeangreen-300 text-xs lg:text-sm">
                TYPE OF COURSES
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Timeline;
