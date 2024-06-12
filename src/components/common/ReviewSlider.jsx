import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { reviews } from "../../../data/reviews";
import Img from "./Img";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const truncatewords = 15;

  return (
    <div className="text-white">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-maxContent">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {reviews.map((review, i) => {
            return (
              <>
                <SwiperSlide key={i}>
                  <div className="flex flex-col  gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 min-h-[180px] max-h-[180px] glass-bg">
                    <div className="flex items-center gap-4">
                      <Img
                        src={
                          review?.user?.image
                            ? review.user?.image
                            : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                        }
                        className="w-16 rounded-full object-cover"
                        alt=""
                      />
                      <div className="flex flex-col ">
                        <h1 className=" font-semibold text-richblack-5 capitalize">
                          {`${review?.user?.firstName}`}{" "}
                          {`${review?.user?.lastName}`}
                        </h1>
                        <h2 className="text-[12px] font-medium text-richblack-500">
                          {review?.course?.courseName}
                        </h2>
                      </div>
                    </div>
                    <p>
                      {review?.review.split(" ").length > truncatewords
                        ? `${review?.review
                            .split(" ")
                            .splice(0, truncatewords)
                            .join(" ")} ...`
                        : `${review?.review}`}
                    </p>
                    <div className="flex items-center gap-2 ">
                      <h3 className="flex text-yellow-100 items-center gap-2">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
