import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    const loginToastId = toast.loading("Please Wait");
    signIn(email, password)
      .then((userCredential) => {
        toast.success("Log In Successfully!", { id: loginToastId });

        // Access token
        axios
          .post(
            "http://localhost:5000/api/v1/jwt",
            { email: userCredential.user.email },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, { id: loginToastId });
      });
  };

  const handleGoogleSignIn = () => {
    const googleLoginToastId = toast.loading("Please Wait");
    googleSignIn()
      .then((userCredential) => {
        toast.success("Sign In Successfully!", { id: googleLoginToastId });
        
        // Access token
        axios
          .post(
            "http://localhost:5000/api/v1/jwt",
            { email: userCredential.user.email },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });

        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message, { id: googleLoginToastId });
      });
  };

  return (
    <div className="max-w-xl py-6 px-4 md:px-8 lg:py-14 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-5">Login Now!</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="sm:flex sm:items-center sm:justify-between">
          <button type="submit">
            <Button>Login your account</Button>
          </button>
          <p className="text-sm mt-4 sm:mt-0 text-gray-900 font-medium">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/register">
              Register now
            </Link>
          </p>
        </div>
      </form>
      <div className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6">
        Or
      </div>
      <div className="mt-5 grid">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-lg align-middle hover:bg-gray-50 focus:border-gray-800 text-sm sm:p-4"
        >
          <svg
            className="w-4 h-auto"
            width="46"
            height="47"
            viewBox="0 0 46 47"
            fill="none"
          >
            <path
              d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
              fill="#4285F4"
            />
            <path
              d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
              fill="#34A853"
            />
            <path
              d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
              fill="#FBBC05"
            />
            <path
              d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
              fill="#EB4335"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
