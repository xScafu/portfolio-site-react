import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import { Link } from "react-router";
import Card from "./Card";

export default function Works() {
  const vercelKey = "boU3gez2p8riDYxuJUlzIyF3";

  const button = {
    light:
      "bg-gray-50 text-center border-2 border-blue-400 font-sans text-2xl font-bold p-2 mb-3 -mt-10 rounded-b-md",
    hover: "hover:bg-gray-200",
    active: "active:bg-gray-300 active:scale-95",
    transition: "transition ease-in-out",
    dark: "dark:bg-slate-600 dark:border-slate-500",
  };

  return (
    <div className="mt-32 bg-blue-400 dark:bg-slate-500 p-3 flex flex-col -mx-3">
      <Link
        to={"/portfolio"}
        className={`${button.light} ${button.hover} ${button.active} ${button.transition} ${button.dark}`}
      >
        <h2>Check my latest works</h2>
      </Link>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        scrollbar={{ hide: true }}
        modules={[EffectCoverflow, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
