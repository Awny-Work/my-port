import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import styles from "@/styles/Home.module.css";
// import {
//   IoIosArrowDropleftCircle,
//   IoIosArrowDroprightCircle,
// } from "react-icons/io";
import Cookies from "js-cookie";
import Image from "next/legacy/image";
// import { useRef } from "react";
// import { useSelector } from "react-redux";
import Link from "next/link";
const CatrgorySlider = ({ Articles }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  return (
    <div className={`${styles.Landing} MarginSection`}>
      {Articles && (
        <Swiper
          speed={1000}
          // lazy={true}
          effect={"fade"}
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={pagination}
          // navigation={{
          //   clickable: true,
          //   prevEl: navigationPrevRef.current,
          //   nextEl: navigationNextRef.current,
          // }}
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          className="mySwiper"
          // onSwiper={(swiper) => {
          //   // Delay execution for the refs to be defined
          //   setTimeout(() => {
          //     // Override prevEl & nextEl now that refs are defined
          //     swiper.params.navigation.prevEl = navigationPrevRef.current;
          //     swiper.params.navigation.nextEl = navigationNextRef.current;
          //     // Re-init navigation
          //     swiper.navigation.destroy();
          //     swiper.navigation.init();
          //     swiper.navigation.update();
          //   });
          // }}
        >
          {Articles.map((ele) => {
            return (
              <SwiperSlide key={ele.id}>
                <Link
                  href={`/article/${ele.title}/${ele.id}/${Cookies.get(
                    "MIgLanSymbol"
                  )}`}
                  // className={styles.sliderContainer}
                  className={`${styles.sliderContainer} ${styles.sliderContainer2}`}

                >
                  <div
                    className={`${styles.info} ${
                      Cookies.get("MIgdir") === "true"
                        ? styles.rightPosition
                        : styles.LeftPosition
                    } `}
                    style={{
                      // right: Cookies.get("MIgdir") === "true" ? "15%" : "unset",
                      // left: Cookies.get("MIgdir") === "false" ? "15%" : "unset",
                      textAlign:
                        Cookies.get("MIgdir") === "true" ? "right" : "left",
                    }}
                  >
                    {ele?.category && <span>{ele?.category?.name} </span>}

                    <h1> {ele.title}</h1>
                    <p>{ele.sub_title}</p>
                    {/* <p>انتريجونال - منذ 3 دقائق</p> */}
                    {ele.authors.map((e) => {
                      return <p key={e}>{e.name}</p>;
                    })}
                  </div>
                  {ele?.main_image && (
                    <div
                      className={`${styles.imageContaine} ${styles.SliderImage}`}
                    >
                      <Image
                        priority
                        layout="fill"
                        objectPosition={"center"}
                        objectFit={"cover"}
                        src={ele?.main_image}
                        alt={"Header"}
                      />
                    </div>
                  )}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      {/* <div
        ref={navigationNextRef}
        className={`${styles.arrow} ${styles.leftArrow}`}
      >
        <IoIosArrowDropleftCircle />
      </div>
      <div
        ref={navigationPrevRef}
        className={`${styles.arrow} ${styles.rightArrow}`}
      >
        <IoIosArrowDroprightCircle />
      </div> */}
    </div>
  );
};

export default CatrgorySlider;
