import { Link } from "react-router-dom";
import Button from "../components/Button";

const ErrorPage = () => {
  return (
    <>
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">
          404
        </h1>
        <h1 className="block text-2xl font-bold text-white"></h1>
        <p className="mt-3 text-gray-600 font-medium">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 font-medium">
          Sorry, we couldn&apos;t find your page.
        </p>
      </div>
      <div className="text-center">
        <Link to="/">
          <Button>Back Home</Button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
