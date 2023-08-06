import styles from "@/styles/Home.module.css";

import Cookies from "js-cookie";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
const Footer = () => {
  // const navigate = useNavigate();
  const { t } = useTranslation();

  const router = useRouter();
  const { SocialArr, FooterAbout } = useSelector((state) => state.HomeSlice);

  return (
    <div
      className={styles.Footer}
      style={{
        textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
        direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
      }}
    >
      <div className="container-xxl">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <div
              className={`${styles.image_container} ${styles.FooterImage}`}
              onClick={() => router.push("/")}
            >
              <Image
                src={"/images/Final_logo3_png.png"}
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                alt={"logo"}
              />
            </div>
            <div className={`${styles.iconsSec} ${styles.footer_iconSec}`}>
              {SocialArr &&
                SocialArr.map((ele) => {
                  return (
                    <a
                      aria-label={ele.name}
                      href={ele.link}
                      key={ele.name}
                      target="_blank"
                    >
                      <span className={`${ele.icon}`}></span>
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="col-md-3">
            <div className={styles.aboutFooter}>
              <h3>{t("menu.about.about")}</h3>
              <p>{FooterAbout && FooterAbout}</p>
            </div>
          </div>
          <div className="col-md-4">
            <Subscribe
              type={"about_shadow footer_shadow"}
              title={"tiny_title"}
            />
          </div>
        </div>
        <p className={`text-center ${styles.copyRight}`}>
          © 2023 CDCENTER. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
