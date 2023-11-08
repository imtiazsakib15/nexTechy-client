import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionContainer from "./SectionContainer";
import Slide from "./Slide";

const Slider = () => {
  const slides = [
    {
      img: "https://i.ibb.co/YtRptPG/slide-2.jpg",
      quote:
        "The computer was born to solve problems that did not exist before.",
      author: "Bill Gates",
    },
    {
      img: "https://i.ibb.co/BcDJxJB/slide-1.jpg",
      quote:
        "Technology empowers people to do what they want to do. It lets people be creative.",
      author: "Steve Ballmer",
    },
    {
      img: "https://i.ibb.co/mDd52kY/slide-3.jpg",
      quote: "Technology is anything that wasn't around when you were born.",
      author: "Alan Kay",
    },
  ];

  return (
    <SectionContainer>
      <div className="my-8 -z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides?.map((slide) => (
            <SwiperSlide key={slide.img}>
              <Slide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
};

export default Slider;
