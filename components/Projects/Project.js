import Image from "next/legacy/image";
import styles from "@/styles/Home/Project.module.css";
import { motion } from "framer-motion";

// import Image from "next/image";
const Project = ({ col, md, xl, src, name, type, link, fit, X ,Y}) => {
  // const item = {
  //   hidden: { opacity: 0, translateY: "50px" },
  //   show: { opacity: 1, translateY: "0" },
  //   trans: { type: "spring", stiffness: 200 },
  //   view: { once: true },
  // };
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
    <motion.div
      // variants={item}
      // siz={50}
      initial={{ opacity: 0, translateX: `${X}px` , translateY: `${Y}px` }}
      whileInView={{ opacity: 1, translateX: "0" , translateY :"0"}}
      transition={{ type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
      className={`col-md-${md} col-lg-${col} col-xl-${xl}  ${styles.project} `}
    >
      <div
        className={`${styles.ImageContainer} ${
          type === "Live"
            ? styles.live
            : type === "train"
            ? styles.train
            : styles.landing
        }`}
      >
        <Image
          alt={name}
          src={src}
          layout={"fill"}
          objectFit={fit}
          objectPosition={"top"}
          className={styles.projectImage}
          loading="lazy"
        />

        <div className={styles.Go}>
          <p>{name}</p>
          <a
            href={`${link}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            {link}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
