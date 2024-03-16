import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext.jsx";
import trackingGraphics from "./assets/OTA-Login-Register.png";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");
  const [userType, setUserType] = useState("user");
  const [error, setError] = useState("");

  const {
    setUsername: setLoggedInUserName,
    setId,
    setRole,
  } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    try {
      const { data } = await axios.post(`${url}/${userType}`, {
        username,
        password,
        role: userType,
      });
      setLoggedInUserName(username);
      setId(data.id);
      setRole(userType);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError(
            "Username already taken. Try logging in or choose a different one."
          );
        } else if (error.response.status === 401) {
          setError(
            "Incorrect username or password. Double-check and try again."
          );
        } else if (error.response.status === 404) {
          setError(
            "User not found. Check your username or register for a new account."
          );
        } else {
          setError("Unexpected error. Please try again later.");
        }
      } else {
        setError("Network error. Check your internet connection.");
      }
    }
  }

  return (
    <div className="bg-slate-50 h-full lg:h-screen lg:overflow-hidden">
      <nav class="bg-white dark:bg-gray-900 sticky w-full h-24 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="" class="h-8" alt="" />
            <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
              OTA'x
            </span>
          </a>
        </div>
      </nav>
      
      <div className="h-auto flex flex-col lg:flex-row mt-10 lg:mt-20 items-center justify-center lg:justify-evenly">
        <div className="mb-8">
          <img
            className="w-full"
            src={trackingGraphics}
            alt="tracking-graphics"
            title="Tracking Graphics"
          />
        </div>
        <form className="w-64 mb-12 md:w-72" onSubmit={handleSubmit} action="">
          <div className="text-red-500 mb-2 border text-center bg-red-50">
            {error}
          </div>

          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="text"
            placeholder="Username"
            required
            className="block w-full rounded-sm p-2 mb-2 border"
          />

          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            placeholder="Password"
            required
            className="block w-full rounded-sm p-2 mb-2 border"
          />

          {/* Add radio buttons to choose user or admin */}
          <div className="m-2 flex justify-evenly">
            <label className="mr-2">
              <input
                className="mr-1"
                type="radio"
                value="user"
                required
                checked={userType === "user"}
                onChange={() => setUserType("user")}
              />
              User
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                value="admin"
                required
                checked={userType === "admin"}
                onChange={() => setUserType("admin")}
              />
              Admin
            </label>
            <label>
              <input
                className="mr-1"
                type="radio"
                value="driver"
                required
                checked={userType === "driver"}
                onChange={() => setUserType("driver")}
              />
              Driver
            </label>
          </div>

          <button className="block bg-gray-900 w-full rounded-sm p-2 hover:bg-gray-700 text-white">
            {isLoginOrRegister === "register" ? "Register" : "Login"}
          </button>

          <div className="text-center mt-2">
            {isLoginOrRegister === "register" && (
              <div>
                Already a member?{" "}
                <button onClick={() => setIsLoginOrRegister("login")}>
                  Login here
                </button>
              </div>
            )}
            {isLoginOrRegister === "login" && (
              <div>
                Don't have an account?{" "}
                <button onClick={() => setIsLoginOrRegister("register")}>
                  Register here
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
