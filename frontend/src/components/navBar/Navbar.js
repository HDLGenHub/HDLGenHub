import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { LogOut, User } from "react-feather";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleSignIn = () => {
    navigate("/login");
  };
  const handleEdit = () => {
    navigate("/edituser");
  };
  const handleSignUp = () => {
    navigate("/registration");
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("You have been logged out successfully.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-amber-700"
      : "text-gray-900";
  };

  if (user) {
    if (user.role === "student") {
      return (
        <header>
          <nav className="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
            <div className="flex justify-between items-center p-2">
              <div className="flex font-semibold m-2 gap-2">
                <li className="block flex-initial rounded hover:text-amber-700 md:mx-5">
                  <Link to="/">
                    <span style={{ color: "orange" }}>HDL </span> Gen Hub
                  </Link>
                </li>
                <div className="md:border-transparent border-r-2 border-gray-300 h-5"></div>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/learn")}`}>
                  <Link to="/learn">Learn</Link>
                </li>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/about")}`}>
                  <Link to="/about">About</Link>
                </li>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/help")}`}>
                  <Link to="/help">Help</Link>
                </li>
              </div>

              <div className="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </button>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div className="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="w-12 h-8 md:w-12 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                  >
                    <User />
                  </button>
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="w-12 h-8 md:w-12 md:h-9 text-white bg-red-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
                  >
                    <LogOut />
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <ToastContainer />
        </header>
      );
    } else if (user.role === "teacher") {
      return (
        <header>
          <nav className="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
            <div className="flex justify-between items-center p-2">
              <div className="flex font-semibold m-2 gap-2">
                <li className="block flex-initial rounded hover:text-amber-700 md:mx-5">
                  <Link to="/">
                    <span style={{ color: "orange" }}>HDL </span> Gen Hub
                  </Link>
                </li>
                <div className="md:border-transparent border-r-2 border-gray-300 h-5"></div>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/courses")}`}>
                  <Link to="/courses">Courses</Link>
                </li>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/about")}`}>
                  <Link to="/about">About</Link>
                </li>
                <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/help")}`}>
                  <Link to="/help">Help</Link>
                </li>
              </div>

              <div className="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </button>

                <div className="relative hidden sm:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                    placeholder="Search..."
                  />
                </div>
                <div className="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="w-12 h-8 md:w-12 md:h-9 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                  >
                    <User />
                  </button>
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="w-12 h-8 md:w-12 md:h-9 text-white bg-red-500 hover:bg-amber-600 text-xs md:font-medium rounded-3xl md:text-sm px-2 text-center"
                  >
                    <LogOut />
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <ToastContainer />
        </header>
      );
    }
  } else {
    return (
      <header>
        <nav className="bg-white border-gray-100 fixed w-full z-20 border-b shadow-sm top-0 start-0">
          <div className="flex justify-between items-center p-2">
            <div className="flex font-semibold m-2 gap-2">
              <li className="block flex-initial rounded hover:text-amber-700 md:mx-5">
                <Link to="/">
                  <span style={{ color: "orange" }}>HDL </span> Gen Hub
                </Link>
              </li>
              <div className="md:border-transparent border-r-2 border-gray-300 h-5"></div>
              <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/about")}`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`block rounded hover:text-amber-700 hover:scale-105 mx-5 ${getNavLinkClass("/help")}`}>
                <Link to="/help">Help</Link>
              </li>
            </div>

            <div className="flex sm:order-2 md:gap-5 gap-2 md:mr-5 items-center">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                className="sm:hidden text-gray-500 hover:bg-gray-10 rounded-lg text-sm p-2.5 me-1"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </button>

              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full h-8 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                  placeholder="Search..."
                />
              </div>
              <div className="flex md:order-2 space-x-2 md:space-x-5 rtl:space-x-reverse">
                <button
                  onClick={handleSignIn}
                  type="button"
                  className="h-8 w-16 md:h-9 md:w-20 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  type="button"
                  className="h-8 w-16 md:h-9 md:w-20 text-white bg-amber-500 hover:bg-amber-600 text-xs md:font-medium rounded-full md:text-sm px-2 text-center"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>
        <ToastContainer />
      </header>
    );
  }
}

export default Navbar;
