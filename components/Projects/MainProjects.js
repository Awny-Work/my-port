// import Project from "./Project";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Image from "next/legacy/image";
// import styles from "@/styles/Home/Project.module.css";

const Project = dynamic(() => import("./Project"), {
  ssr: false,
  // loading: () => "Loading...",
});
const MainProjects = () => {
  const { t } = useTranslation();
  // const trans = {
  //   // delayChildren: 0.5,
  //   staggerChildren: 0.5,
  // };
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5
  //     }
  //   }
  // }
  // const item = {
  //   hidden: { opacity: 0, x: -50 },
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //     },
  //   },
  // };
  return (
    <div className="container">
      <h2 className="main-title"> {t("live")}</h2>
      <div
        className="row"
        // initial="hidden"
        // animate="show"
        // variants={container}
      >
        {/* <motion.div
          variants={item}
          siz={50}
          viewport={{ once: true }}
          // initial={{ opacity: 0, translateY: "50px" }}
          // whileInView={{ opacity: 1, translateY: "0" }}
          // transition={{ type: "spring", stiffness: 200 }}
          className={`col-md-6 col-lg-6 col-xl-6  ${styles.project} `}
        >
          <div className={`${styles.ImageContainer} ${styles.live}`}>
            <Image
              alt={"name"}
              src={"/images/live/MI.webp"}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"top"}
              className={styles.projectImage}
            />

            <div className={styles.Go}>
              <p>{"name"}</p>
              <a
                href={`https://souq-mahala.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"name"}
              >
                {"https://souq-mahala.com"}
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          siz={50}
          // initial={{ opacity: 0, translateY: "50px" }}
          // whileInView={{ opacity: 1, translateY: "0" }}
          // transition={{ type: "spring", stiffness: 200 }}
          // viewport={{ once: true }}
          className={`col-md-6 col-lg-6 col-xl-6  ${styles.project} `}
        >
          <div className={`${styles.ImageContainer} ${styles.live}`}>
            <Image
              alt={"name"}
              src={"/images/live/MI.webp"}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"top"}
              className={styles.projectImage}
            />

            <div className={styles.Go}>
              <p>{"name"}</p>
              <a
                href={`https://souq-mahala.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"name"}
              >
                {"https://souq-mahala.com"}
              </a>
            </div>
          </div>
        </motion.div> */}
        <Project
          col={6}
          src={"/images/live/MI.webp"}
          name={"Mohamed Ibrahim for Trading Electrical Tools"}
          type={"Live"}
          fit={"cover"}
          link={"https://mohamed-ibrahiem.com"}
          X={-50}
          Y={0}
        />
        <Project
          fit={"cover"}
          col={6}
          src={"/images/live/Souq.webp"}
          name={"souq mahala "}
          type={"Live"}
          link={"https://souq-mahala.com"}
          X={50}
          Y={0}

        />
        <Project
          fit={"cover"}
          col={6}
          src={"/images/live/deltawy.webp"}
          name={"Deltawy Compaany"}
          type={"Live"}
          link={"https://deltawy.com"}
          X={-50}
          Y={0}

        />
        <Project
          fit="cover"
          col={6}
          src={"/images/live/dalell.webp"}
          name={"Mahalla and Delta guide"}
          type={"Live"}
          link={"https://deltawy.net"}
          X={50}
          Y={0}

        />
      </div>
    </div>
  );
};

export default MainProjects;
