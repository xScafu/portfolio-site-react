import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

export default function Works() {
  const button = {
    light:
      "bg-gray-50 border-2 border-blue-400 font-sans text-lg font-bold p-2 mb-3 -mt-8 rounded-b-md",
    hover: "hover:bg-gray-200",
    active: "active:bg-gray-300 active:scale-95",
    transition: "transition ease-in-out",
  };

  return (
    <div className="mt-32 bg-blue-400 p-3 flex flex-col -mx-3">
      <button
        className={`${button.light} ${button.hover} ${button.active} ${button.transition}`}
      >
        <h2>Check my latest works</h2>
      </button>
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
          <div className="card bg-gray-50 image-full shadow-xl rounded-md overflow-hidden">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-gray-50 image-full shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
