import Image from "next/legacy/image";
import styles from "@/styles/About.module.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Link from "next/link";
const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="container paddingTop" id={"about"}>
      <h2 className="main-title">{t("about.about")}</h2>
      <div className="row  justify-content-center ">
        <div className="col-lg-6">
          <motion.div
            // animate={{
            //   scale: [1, 2, 2, 1, 1],
            //   rotate: [0, 0, 270, 270, 0],
            //   borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            // }}
            // variants={{
            //   offscreen: {
            //     y: 300,
            //   },
            //   onscreen: {
            //     y: 50,
            //     rotate: -10,
            //     transition: {
            //       type: "spring",
            //       bounce: 0.4,
            //       duration: 0.8,
            //     },
            //   },
            // }}
            initial={{ opacity: 0, translateY: "50px" }}
            whileInView={{ opacity: 1, translateY: "0" }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className={styles.MyImage}
          >
            <Image
              className={styles.ImageTag}
              src={"/images/awny.webp"}
              alt={"Abdelrahman Tarek Awny"}
              layout={"fill"}
              objectFit={"contain"}
              priority
            />
          </motion.div>
        </div>
        <div className="col-lg-5">
          <div className={styles.aboutSections}>
            <motion.div
              initial={{ opacity: 0, translateX: "-50px" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className={styles.number}
            >
              {/* <i className="pi pi-send"></i> */}
              <span className={`icon-briefcase ${styles.icon}`}></span>
              <p>{t("about.exp")}</p>
              <span className={styles.blus}>+1 {t("about.year")}</span>
            </motion.div>
            <motion.div
              className={styles.number}
              initial={{ opacity: 0, translateX: "50px" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className={`icon-check ${styles.icon}`}></span>
              <p>{t("about.comp")}</p>
              <span className={styles.blus}>+8 {t("about.project")}</span>
            </motion.div>
            <motion.div
              className={styles.number}
              initial={{ opacity: 0, translateX: "-50px" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className={`icon-embed2 ${styles.icon}`}></span>

              <p>{t("about.train")}</p>
              <span className={styles.blus}>+18 {t("about.project")}</span>
            </motion.div>
            <motion.div
              className={styles.number}
              initial={{ opacity: 0, translateX: "50px" }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
            >
              <span className={`icon-cc-visa ${styles.icon}`}></span>
              <p>{t("about.free")}</p>
              <span className={styles.blus}>+5 {t("about.project")}</span>
            </motion.div>
          </div>
          <p className={styles.aboutP}>{t("about.Descrip")}</p>
          <div className="d-flex justify-content-around flex-wrap align-items-center ">
            <Link
              href="/contact"
              className={`say`}

              // target="_blank"
              // rel="noopener noreferrer"
              // aria-label="Download My cv "
            >
              {t("contact.contact")}
              {/* <i className="pi pi-send"></i> */}
              {/* <span className="icon-download"></span> */}
              <span class="icon-paper-plane"></span>
            </Link>

            <a
              href="https://drive.google.com/file/d/1ArCojQ023COFF569cSqC5NIxsI6Q2ayJ/view?usp=sharing"
              className={`say`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download My cv "
            >
              {t("about.viewCv")}
              {/* <i className="pi pi-send"></i> */}
              {/* <span className="icon-download"></span> */}
              <span class="icon-eye"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
