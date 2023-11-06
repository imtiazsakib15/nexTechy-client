import SectionContainer from "./SectionContainer";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import Button from "./Button";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isShowNav, setIsShowNav] = useState(false);

  const handleLogOut = () => {
    const logOutToastId = toast.loading("Please Wait");
    logOut()
      .then(() => {
        toast.success("Log In Successfully!", { id: logOutToastId });
      })
      .catch((error) => {
        toast.error(error.message, { id: logOutToastId });
      });
  };

  return (
    <div className="border-b shadow-md sticky top-0 bg-white z-10">
      <SectionContainer>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 p-1 my-4">
            <img className="w-7 h-7" src={logo} alt="Logo" />
            <span className="text-lg font-bold">nexTechy</span>
          </Link>
          <div className="flex items-center gap-6">
            <div
              className={`flex flex-col lg:flex-row gap-5 absolute lg:relative items-center w-full left-0 lg:top-0 bg-white py-6 lg:py-0 z-30 duration-500 lg:duration-0 ${
                isShowNav ? "top-[69px]" : "-top-[999px]"
              }`}
            >
              <NavLink
                to="/"
                onClick={() => setIsShowNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-semibold px-1 py-1"
                    : "font-semibold px-1 py-1"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/add-blog"
                onClick={() => setIsShowNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-semibold px-1 py-1"
                    : "font-semibold px-1 py-1"
                }
              >
                Add Blog
              </NavLink>
              <NavLink
                to="/all-blogs"
                onClick={() => setIsShowNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-semibold px-1 py-1"
                    : "font-semibold px-1 py-1"
                }
              >
                All Blogs
              </NavLink>
              <NavLink
                to="/featured-blogs"
                onClick={() => setIsShowNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-semibold px-1 py-1"
                    : "font-semibold px-1 py-1"
                }
              >
                Featured Blogs
              </NavLink>
              <NavLink
                to="/wishlist"
                onClick={() => setIsShowNav(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 underline font-semibold px-1 py-1"
                    : "font-semibold px-1 py-1"
                }
              >
                Wishlist
              </NavLink>
              {user?.email ? (
                <button onClick={handleLogOut} className="w-max">
                  <Button>Log Out</Button>
                </button>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    onClick={() => setIsShowNav(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 underline font-semibold px-1 py-1"
                        : "font-semibold px-1 py-1"
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setIsShowNav(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 underline font-semibold px-1 py-1"
                        : "font-semibold px-1 py-1"
                    }
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
            <div
              onClick={() => setIsShowNav(!isShowNav)}
              className="text-2xl lg:hidden"
            >
              {isShowNav ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
            {user?.email && (
              <img
                className="w-8 h-8 rounded-full"
                src={user?.photoURL}
                alt="User Image"
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default NavBar;
