import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserMap from "./UserMap";
import axios from "axios";
import Emptymap from "./UserEmptyMap";

function UserHome() {
  const [trackingId, setTrackingId] = useState("");
  const [data , setData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const { data } = await axios.post(`/user-dashboard/track`, {
        trackingId,
      });
      setData(data);
      console.log(data);
      // Handle the response data as needed
      console.log("hello",data);
    } catch (err) {
      console.error(err);
    }
  }

  const scrollToForm = () => {
    const formSection = document.getElementById("track-order");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* +++++++++++++++ Hero Section ++++++++++++++ */}
      <section class="bg-white dark:bg-gray-100">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
            Track your Deliveries
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            maiores vitae placeat ipsum aliquam eaque exercitationem? Repellat
            mollitia vero eligendi.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a id="track-order" 
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-900"
          onClick={scrollToForm}
        >
              Track Now
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <Link
              to="/about"
              class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ++++++++++++++++++++++ Tracker ++++++++++++++ */}
      <div className="flex items-center justify-center gap-32 m-20">
        <div className="flex items-center justify-center flex-col gap-[2rem]">
          {/* +++++++++++++++++++++ Tracking ID ++++++++++++++++++++ */}
          <div
            className="flex item-center justify-center border-2 border-cyan-500 rounded-2xl h-48 w-[36rem]"
          >
            <form className="flex item-center justify-evenly flex-col" onSubmit={handleSubmit}>
              <span className="text-2xl">Tracking ID: </span>
              <input
                type="text"
                name="trackingId"
                value={trackingId}
                placeholder="Enter Tracking ID"
                className="w-full text-xl h-10 border-black border-2 rounded-lg p-4 outline-cyan-500"
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <input
                type="submit"
                value="Track order"
                className="mx-auto w-auto py-3 px-5 sm:ms-4 font-medium text-gray-400 text-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-700 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
              />
            </form>
          </div>

          {/* ++++++++++++++++++++++ Location +++++++++++++++++++++++ */}
          <div className="flex item-center justify-center border-2 h-96 w-[36rem]">
            <div className="w-full h-full">

              {data ? <UserMap coordinates={data.driverCoordinates}/> : <Emptymap />}



            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* +++++++++++++++++++++++++ Notifications +++++++++++++++++++++++++++++ */}
          <div className="flex item-center justify-center flex-col border-2 border-cyan-500 rounded-2xl h-[38rem] w-[30rem]">
            <div>
              <h1 className="font-bold text-3xl p-5 text-cyan-500">
                Notifications
              </h1>
            </div>
            <div className="overflow-y-scroll w-full p-10 font-bold text-2xl">
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
              <p className="h-16">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHome;
