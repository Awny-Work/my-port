import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay, Navigation } from "swiper";
import Image from "next/legacy/image";
const SwiperApp = () => {
  return (
    <div className="TestApp">
      <div className=" emptyApp"></div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        // loop={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="MobileSlider">
            <Image
              src={"/images/Bahr/photo_2023-02-15_18-40-16.jpg"}
              alt={"test"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperApp;
