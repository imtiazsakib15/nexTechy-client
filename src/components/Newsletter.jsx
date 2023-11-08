import axios from "axios";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import toast from "react-hot-toast";

const Newsletter = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    const subscribeNewsletterId = toast.loading("Please Wait!");
    axios
      .post(
        "https://nex-techy-server-j3ujcuwko-imtiaz-ahmeds-projects.vercel.app/api/v1/newsletter-subscriber",
        { email }
      )
      .then(() => {
        toast.success("Thank you for subscribing newsletter.", {
          id: subscribeNewsletterId,
        });
        event.target.reset();
      })
      .catch(() => {
        toast.error("An error occured. Please try again.", {
          id: subscribeNewsletterId,
        });
      });
  };

  return (
    <SectionContainer>
      <div className="border rounded-lg shadow-md my-20 px-4 py-6">
        <h3 className="text-2xl font-semibold">SIGN UP FOR DAILY NEWSLETTER</h3>
        <p className="mt-1">
          Do you want to get notified when a new blog is released? Sign up for
          our newsletter and you&apos;ll be among the first to find out about
          new blogs.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-5 mt-5"
        >
          <div className="flex-1 w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <button>
            <Button>Subscribe</Button>
          </button>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Newsletter;
