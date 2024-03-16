import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Help() {
  return (
    <>
    <Navbar/>
      <div className="flex items-center flex-wrap justify-center gap-32 mb-20 lg:m-20">
        <div>
          <p className="text-2xl font-bold text-center">FAQ's</p>
          <img
            className="h-96"
            src="https://img.freepik.com/free-vector/mail-sent-concept-illustration_114360-96.jpg?t=st=1709984480~exp=1709988080~hmac=c47807fc6276df7f0837690dac0eab8955b712f815d54028611fa4cd017cefb9&w=740"
            alt=""
          />
        </div>
        <div className="m-2 space-y-5 w-[90%] lg:w-1/2">
          <div
            className="group flex flex-col gap-2 rounded-lg bg-cyan-900 p-5 text-white"
            tabindex="1"
          >
            <div className="flex cursor-pointer items-center justify-between text-2xl">
              <span>1. How does OTA'x track my orders?</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0  text-xl transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              OTA'x utilizes advanced tracking technology that integrates with
              shipping carriers' systems to provide real-time updates on the
              status and location of your orders.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-lg bg-cyan-900 p-5 text-white"
            tabindex="2"
          >
            <div className="flex cursor-pointer items-center justify-between text-2xl">
              <span>
                2. Can I track multiple orders simultaneously on OTA'x?
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all text-xl group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              Yes, OTA'x allows you to track multiple orders from various
              vendors all in one place, providing you with a centralized
              platform for easy monitoring.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-lg bg-cyan-900 p-5 text-white"
            tabindex="3"
          >
            <div className="flex cursor-pointer items-center justify-between text-2xl">
              <span> 3. What shipping carriers does OTA'x support?</span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 text-xl transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              OTA'x supports a wide range of shipping carriers, including but
              not limited to FedEx, UPS, DHL, USPS, and more. You can track
              orders from various carriers all within the OTA'x platform.
            </div>
          </div>

          <div
            className="group flex flex-col gap-2 rounded-lg bg-cyan-900 p-5 text-white"
            tabindex="4"
          >
            <div className="flex cursor-pointer items-center justify-between text-2xl">
              <span>
                4. What should I do if there is a problem with my order on
                OTA'x?
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
              />
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 text-xl transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              If you encounter any issues with your order or have questions
              about the tracking information provided on OTA'x, you can reach
              out to our customer support team for assistance. We're here to
              help resolve any concerns you may have.
            </div>
          </div>
        </div>
      </div>

      {/* +++++++ Contact Us+++++++++++++ */}
      <section class="bg-white dark:bg-cyan-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="text-center">
            <p class="font-medium text-blue-500 text-2xl dark:text-blue-400">
              Contact us
            </p>

            <p class="mt-3 text-gray-500 text-lg dark:text-gray-400">
              Don't be a stranger. Ask us. 
            </p>
          </div>

          <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Mail Us
              </h2>

              <p class="mt-2 text-blue-500 dark:text-blue-400">abc@gmail.com</p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Locate Us
              </h2>

              <p class="mt-2 text-blue-500 dark:text-blue-400">
                MITS College Gwalior (M.P.)
              </p>
            </div>

            <div class="flex flex-col items-center justify-center text-center">
              <span class="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 class="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                Call Us
              </h2>

              <p class="mt-2 text-blue-500 dark:text-blue-400">8976461166</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Help;
