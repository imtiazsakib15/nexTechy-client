import Newsletter from "../components/Newsletter";
import RecentBlogs from "../components/RecentBlogs";
import Slider from "../components/Slider";
import TechFunHacks from "../components/TechFunHacks";

const Home = () => {
  return (
    <>
      <Slider />
      <RecentBlogs />
      <TechFunHacks />
      <Newsletter />
    </>
  );
};

export default Home;
