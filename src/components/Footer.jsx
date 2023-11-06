import { Link } from "react-router-dom";
import logo from "/logo.png";
import SectionContainer from "./SectionContainer";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 pt-14 pb-20">
        <SectionContainer>
          <div className="md:flex md:justify-between">
            <div className="md:w-1/5 mb-6 md:mb-0">
              <Link
                to="/"
                className="flex items-center justify-center gap-1 p-1 my-4"
              >
                <img className="w-7 h-7" src={logo} alt="Logo" />
                <span className="text-lg lg:text-xl text-white font-bold">
                  nexTechy
                </span>
              </Link>
            </div>
            <div className="md:w-3/5 grid sm:grid-cols-3 gap-8 sm:gap-6">
              <div className="text-center sm:text-left">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Important Links
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/all-blogs" className="hover:underline">
                      All Blogs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/featured-blogs" className="hover:underline">
                      Featured Blogs
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/wishlist" className="hover:underline">
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Follow us
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link
                      to="https://facebook.com"
                      className="hover:underline "
                    >
                      Facebook
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      to="https://linkedin.com"
                      className="hover:underline "
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="https://github.com" className="hover:underline ">
                      Github
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="https://discord.com" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                  Legal
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <Link to="/" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div>
            <span className="text-sm text-gray-500 flex items-center justify-center">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                nexTechy
              </Link>
              . All Rights Reserved.
            </span>
          </div>
        </SectionContainer>
      </footer>
    </>
  );
};

export default Footer;
