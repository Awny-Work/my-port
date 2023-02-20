import Image from "next/legacy/image";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();

  const router = useRouter();
  return (
    <div className={`container ${styles.Header}`}>
      <div className="row align-items-center justify-content-around">
        <div className="col-2  col-sm-2 col-md-1 d-flex flex-column justify-content-evenly">
          <motion.a
            initial={{ opacity: 0, translateX: `-20px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className={styles.iconLink}
            aria-label="My Github Account"
            href={"https://github.com/awny277"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-github"></span>
            {/* <i className="pi pi-github"></i> */}
          </motion.a>
          <motion.a
            initial={{ opacity: 0, translateX: `-20px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            viewport={{ once: true }}
            className={styles.iconLink}
            aria-label="My Linkedin Account"
            href={"https://www.linkedin.com/in/abdelrahman-awny/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-linkedin"></span>
            {/* <i className="pi pi-linkedin"></i> */}
          </motion.a>
          <motion.a
            initial={{ opacity: 0, translateX: `-20px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
            className={styles.iconLink}
            aria-label="My Twitter Account"
            href={"https://twitter.com/Abdelrahman2486"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-twitter"></span>
            {/* <i className="pi pi-twitter"></i> */}
          </motion.a>
          <motion.a
            initial={{ opacity: 0, translateX: `-20px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            viewport={{ once: true }}
            className={styles.iconLink}
            aria-label="My Facebook Account"
            href={"https://www.facebook.com/abdo.awny.9/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-facebook"></span>
            {/* <i className="pi pi-facebook"></i> */}
          </motion.a>
          <motion.a
            initial={{ opacity: 0, translateX: `-20px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
            className={styles.iconLink}
            aria-label="My Phone Number"
            href={"tel:00201012894508"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-phone"></span>
            {/* <i className="pi pi-phone"></i> */}
          </motion.a>
        </div>
        <div className={`col-md-6 ${styles.Colorder}`}>
          <div className={styles.Hello}>
            <motion.h1
              initial={{ opacity: 0, translateY: `20px` }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              className={styles.head1}
            >
              {t("header.name")}
            </motion.h1>
            <motion.p
              className={styles.jobname}
              initial={{ opacity: 0, translateX: `20px` }}
              whileInView={{ opacity: 1, translateX: "0" }}
              transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {" "}
              {t("header.job")}
            </motion.p>
            <motion.p
              className={styles.coverLetter}
              initial={{ opacity: 0, translateY: `20px` }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("header.cover")}
            </motion.p>
            {/* <button></button> */}
            <motion.a
              initial={{ opacity: 0, translateY: `-20px` }}
              whileInView={{ opacity: 1, translateY: "0" }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              viewport={{ once: true }}
              className={`say`}
              // aria-label="our whatsapp number"
              href={`https://wa.me/201012894508`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("header.whats")}
              <span className="icon-paper-plane"></span>
              {/* <i className="pi pi-send"></i> */}
            </motion.a>
          </div>
        </div>
        <div className="col-8 col-sm-9 col-md-9 col-lg-4">
          <motion.div
            className={styles.MyImage}
            initial={{ opacity: 0, translateX: `100px` }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              className={styles.ImageTag}
              src={"/images/awny.webp"}
              alt={"Abdelrahman Tarek Awny"}
              layout={"responsive"}
              width={350}
              height={350}
              // objectFit={"contain"}
              priority
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, translateY: `-100px` }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
        viewport={{ once: true }}
        onClick={() => router.push("/#about")}
        className={`${styles.ScrollDownSec} d-flex align-items-center justify-content-between`}
      >
        <div className={styles.Mouse}></div>
        <span>{t("header.mouse")}</span>
        <i className="pi pi-arrow-down"></i>
      </motion.div>
    </div>
  );
};

export default Header;
