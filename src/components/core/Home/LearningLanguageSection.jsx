import HighlightText from "./HighlightText";
import know_your_progress from "../../../assets/Images/Know_your_progress.png";
import compare_withe_others from "../../../assets/Images/Compare_with_others.png";
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./Button";

function LearningLanguageSection() {
  return (
    <div className="mt-[130px] mb-10">
      <div className="flex flex-col gap-5 items-center ">
        <div className="text-3xl lg:text-4xl items-center">
          Your Swiss Knife for
          <HighlightText text={"learning any language"} />
        </div>
        <div className="lg:text-center text-richblack-600 mx-auto text-base font-medium lg:w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-5">
          <img
            src={know_your_progress}
            className=" object-contain lg:-mr-32"
            alt=""
          />
          <img src={compare_withe_others} className=" object-contain" alt="" />
          <img
            src={plan_your_lesson}
            className=" object-contain lg:-ml-36"
            alt=""
          />
        </div>
        <div className=" w-fit">
          <CTAButton active={true}>
            <div>learn more</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}

export default LearningLanguageSection;
