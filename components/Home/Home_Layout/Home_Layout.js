// import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/lazy';

// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
import styles from "@/styles/Home.module.css";
// import Home_Layout_11 from "../../../images/Rectangle 1 (1).png";
// import Header2 from "../../../images/Rectangle 1 (2).png";
// import Header3 from "../../../images/Rectangle 1 (3).png";
// import Header4 from "../../../images/Rectangle 1 (4).png";
// import {
//   IoIosArrowDropleftCircle,
//   IoIosArrowDroprightCircle,
// } from "react-icons/io";
// import Cookies from "js-cookie";
// import Image from "next/legacy/image";
// import { useRef } from "react";
import { useSelector } from "react-redux";
// import Card from "@/components/layout/Card/Card";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/layout/Card/Card"), {
  // loading: () => <p>Loading...</p>,
  ssr: false,
});
const Home_Layout_1 = () => {
  const { HomeArr } = useSelector((state) => state.HomeSlice);
  // useEffect(() => {
  //   if (!HomeArr) {
  //     dispatch(getHome());
  //   }
  // }, [dispatch, HomeArr]);
  const HomeLayouts =
    HomeArr && Object.values(HomeArr?.categories_with_articles);
  const Layout_1 =
    HomeLayouts && HomeLayouts.filter((ele) => ele.home_layout === "layout_1");

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  return (
    <div
      className={`HomeLayoutbullets ${styles.Landing} ${styles.HomeLayouts}`}
    >
      <Swiper
        speed={1500}
        // lazy={true}
        // effect={"fade"}
        spaceBetween={25}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={pagination}
        // slidesPerView={1}
        loop={true}
        // navigation={true}
        // navigation={{
        //   clickable: true,
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        modules={[Pagination]}
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
        {Layout_1 &&
          Layout_1.map((ele) => {
            return ele?.articles.map((el) => {
              return (
                <SwiperSlide className={styles.Home_Layout_1} key={el.id}>
                  <Card
                    {...el}
                    writer={true}
                    type={"LrgCRD"}
                    image={"/images/card 1.png"}
                  />
                </SwiperSlide>
              );
            });
          })}
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
      </Swiper>
    </div>
  );
};

export default Home_Layout_1;
