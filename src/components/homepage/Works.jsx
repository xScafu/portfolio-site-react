import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar } from "swiper/modules";
import {
  clamp,
  easeIn,
  easeOut,
  motion,
  useMotionValue,
  useTime,
  useTransform,
} from "motion/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

import Card from "../Card";

export default function Works() {
  const time = useTime();
  const x = useTransform(time, (latest) => Math.sin(latest / 450) * 5);

  return (
    <div className="mt-32 bg-blue-400 dark:bg-slate-700 p-3 flex flex-col -mx-3 ">
      <h2 className=" text-center text-gray-50 font-sans text-4xl xl:text-5xl font-bold p-2 my-10">
        Some of my works
      </h2>
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
        scrollbar={{ hide: true, snapOnRelease: true, enabled: true }}
        modules={[EffectCoverflow, Scrollbar]}
        className="mySwiper mb-5 md:w-3/4 xl:w-1/3"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center my-32 text-gray-50">
            <motion.svg
              style={{ x }}
              className="size-20 fill-gray-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </motion.svg>
            <h3 className="text-3xl ml-5">Swipe</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            cardTitle="NASA APOD"
            cardDescription="NASA Astronomy picture of the day website"
            cardImg="../NASA_APOD.png"
            cardLink="https://es-nasa-apod.vercel.app/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            cardTitle="To do list"
            cardDescription="A React to do list exaple with local storage saving and state manipulations."
            cardImg="../To_do_list.png"
            cardLink="https://react-task-coral-iota.vercel.app/"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Card
            cardTitle="Fakestore"
            cardDescription="A fake store using React and API calls."
            cardImg="../Fakestore.png"
            cardLink="https://fakestore-react-tan.vercel.app/"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
