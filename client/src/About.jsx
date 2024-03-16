import React, { useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfileCards from "./ProfileCards";

function About() {
  const ref = useRef(null);
  const data = [
    {
      img: "./images/tanmay.jpg",
      name: "Tanmay Sawankar",
      linkedin: "https://www.linkedin.com/in/tanmay-sawankar-57a945223/",
      github: "https://github.com/TanmaySawankar390",
    },
    {
      img:"./images/akshat.jpg" ,
      name: "Akshat Jain",
      linkedin: "http://www.linkedin.com/in/its-akshat-jain",
      github: "https://github.com/its-AkshatJain",
    },
    {
      img: "https://images.pexels.com/photos/20015800/pexels-photo-20015800/free-photo-of-a-squirrel-sitting-on-a-tree-branch-with-its-eyes-open.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Yugal Burde",
      linkedin: "https://www.linkedin.com/in/yugal-burde-58012a256/",
      github: "https://github.com/yugal1107/",
    },
    {
      img: "./images/deepanshu.jpg",
      name: "Deepanshu Pathak",
      linkedin: "https://www.linkedin.com/in/deepanshu-pathak-262428265/",
      github: "https://github.com/Deepanshu-pathak",
    },
  ];
  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center flex-col lg:mx-32 lg:my-16 py-6 lg:rounded-3xl border-2 border-black shadow-2xl">
        <div className="flex items-center justify-center h-16 w-full text-black font-bold text-3xl ">
          <p>About Us</p>
        </div>
        <div className="flex items-center justify-center gap-12 rounded-3xl p-8 lg:px-8 w-[90%] bg-gray-200">
          <p className="text-xs sm:text-sm md:text-xl">
            1. Welcome to OTA'x, your premier destination for simplified order
            tracking and real-time package location updates. At OTA'x, we
            understand the importance of transparency and convenience when it
            comes to tracking your orders. That's why we've developed a
            cutting-edge Delivery Tracking Web Platform to revolutionize the way
            you monitor your shipments.
          </p>
          <img
            className="w-[6rem] h-[6rem] md:w-[12rem] md:h-[12rem]"
            src="\src\assets\Illus2-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-12 rounded-3xl p-8 lg:px-8 w-[90%] ">
          <img
            className="w-[6rem] h-[6rem] md:w-[12rem] md:h-[12rem]"
            src="\src\assets\Illus1-removebg-preview.png"
            alt=""
          />
          <p className="text-xs sm:text-sm md:text-xl ">
            2.Gone are the days of uncertainty and frustration as you wait for
            your package to arrive. With OTA'x, you can now effortlessly track
            the status and location of your orders with just a few clicks. Our
            user-friendly platform provides you with instant access to all the
            information you need, right at your fingertips.
          </p>
        </div>
        <div className="flex items-center justify-center gap-12 rounded-3xl p-8 lg:px-8 w-[90%] bg-gray-200">
          <p className="text-xs sm:text-sm md:text-xl">
            3. What sets OTA'x apart is our commitment to delivering real-time
            updates on the whereabouts of your package as it makes its journey
            to your doorstep. No more guessing games or endless waiting - with
            OTA'x, you'll always know exactly where your order is and when it's
            expected to arrive.
          </p>
          <img
            className="w-[6rem] h-[6rem] md:w-[12rem] md:h-[12rem]"
            src="\src\assets\Illus3-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="flex items-center justify-center gap-12 rounded-3xl p-8 lg:px-8 w-[90%]  ">
          <img
            className="w-[6rem] h-[6rem] md:w-[12rem] md:h-[12rem]"
            src="\src\assets\Illus1-removebg-preview.png"
            alt=""
          />
          <p className="text-xs sm:text-sm md:text-xl ">
            4.Whether you're eagerly anticipating a long-awaited package or
            managing multiple shipments for your business, OTA'x is here to
            streamline the tracking process and enhance your overall delivery
            experience. Say goodbye to confusion and hello to clarity with OTA'x
            Delivery Tracking Platform.
          </p>
        </div>
      </div>

      {/* +++++++++++++++++ Team Profiles +++++++++++++++++++ */}
      <div className="flex items-center justify-center flex-col mx-32 my-16 p-8 ">
        <p className="text-2xl font-bold">Our Team</p>
        <div
          ref={ref}
          className="mt-6  gap-7  flex justify-evenly items-center flex-wrap"
        >
          {data.map((item, index) => (
            <ProfileCards data={item} reference={ref} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
