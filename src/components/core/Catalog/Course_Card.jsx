// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import GetAvgRating from "../../utils/avgRating";

// import CardImg from "../../../assets/images.jpg";
import { FaStar } from "react-icons/fa";
export default function Course_Card() {
  const course = {
    _id: 1,
    thumbnail:
      "https://res.cloudinary.com/defsmhgn9/image/upload/v1717475682/notion-lms-courses/lf7kqjno1zydbasigjbi.webp",
    courseName: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    instructorName: " Sunnatullo Sunna",
    price: 213,
  };

  return (
    <div className="w-[398px] hover:scale-[1.03] transition-all duration-200 z-50 ">
      <Link to={`/courses/${course.id}`}>
        <div className="">
          <div className=" rounded-lg">
            <img
              src={course?.thumbnail}
              className={`h-[250px] w-full rounded-xl object-cover `}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructorName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">5</span>
              <span className="text-yellow-25 flex ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <span className=" text-richblack-400">2 Ratings</span>
            </div>
            <p className=" text-xl text-richblack-5">$ {course.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
