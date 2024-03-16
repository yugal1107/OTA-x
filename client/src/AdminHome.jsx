import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import AdminGraphics from "./assets/Admin-Home.png";

export default function AdminHome() {
  const { username } = useContext(UserContext);

  const [formData, setFormData] = useState({
    hub: "",
    admin: username,
    driverId: "",
    trackingIds: [],
    hubContact: "",
    nextHub: ""
  });

  const [fetchedData, setFetchedData] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // For trackingIds, split the comma-separated values into arrays
    const newValue = name === "trackingIds" ? value.split(",") : value;
    console.log(`name: ${name}, value: ${value}, newValue: ${newValue}`);

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/admin-dashboard/submit", formData);
      console.log("Form submitted successfully:", response.data);
      setFormData({
        hub: "",
        admin: username,
        driverId: "",
        trackingIds: [],
        hubContact: "",
        nextHub: ""
      });
      setSubmitStatus((prevStatus) => !prevStatus);
    } catch (error) {
      console.error("Form submission error:", error.message);
    }
  };

  useEffect(() => {
    // Fetch data from the database and update fetchedData state
    const fetchData = async () => {
      try {
        const response = await axios.get("/admin-dashboard"); // Replace with your actual API endpoint
        setFetchedData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [submitStatus]); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <div className="flex w-auto justify-center items-center flex-wrap md:flex-nowrap">
        <div className="mb-8">
          <img
            className="w-full"
            src={AdminGraphics}
            alt="Admin-graphics"
            title="Admin Graphics"
          />
        </div>
        <form
          className="w-full p-4 bg-white shadow-md rounded-md h-auto mt-9"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row md:flex-wrap gap-3">
            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Hub Name
              </label>
              <p className="text-xs text-gray-500 mt-1">Enter the hub name</p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="hub"
                value={formData.hub}
                onChange={handleInputChange}
                placeholder="Enter Hub Name"
                required
              />
            </div>

            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Admin Name
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Enter the admin name
              </p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="admin"
                placeholder={username}
                value={formData.admin}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Driver ID
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Enter the driver ID
              </p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="driverId"
                value={formData.driverId}
                onChange={handleInputChange}
                placeholder="Enter Driver ID"
                required
              />
            </div>

            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Tracking IDs (comma-separated)
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Enter the tracking IDs (comma-separated) for orders associated
                with this driver ID
              </p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="trackingIds"
                value={formData.trackingIds.join(",")}
                onChange={handleInputChange}
                placeholder="Enter Tracking IDs"
                required
              />
            </div>

            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Hub Contact Number
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Enter the Hub Contact Number
              </p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="number"
                name="hubContact"
                value={formData.hubContact}
                onChange={handleInputChange}
                placeholder="Enter Hub Contact Number"
                required
              />
            </div>

            <div className="flex flex-col mb-4 md:w-1/3 w-11/12 mx-auto">
              <label className="block text-sm font-medium text-gray-700">
                Next Hub
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Enter the Next Hub name
              </p>
              <input
                className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                name="nextHub"
                value={formData.nextHub}
                onChange={handleInputChange}
                placeholder="Enter Next Hub Name"
                required
              />
            </div>
          </div>

          <button
            className="w-auto bg-blue-500 text-white px-4 py-2 block mx-auto rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 mx-auto">
        {fetchedData.map((hub) => (
          <div
            key={hub._id}
            className="mb-4 p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-xl font-semibold mb-2">{hub.hub}</h2>
            <p>
              <span className="font-semibold">Admin:</span> {hub.admin}
            </p>
            <p>
              <span className="font-semibold">Driver ID:</span> {hub.driverId}
            </p>
            <p>
              <span className="font-semibold">Tracking IDs:</span>{" "}
              {hub.trackingIds.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Contact:</span> {hub.hubContact}
            </p>
            <p>
              <span className="font-semibold">Next Hub:</span> {hub.nextHub}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
