import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Logo = dynamic(() => import("../Logo/Logo"), {
  ssr: false,
  // loading: () => "Header...",
});
const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.Footer}>
      <Logo w={100} h={100} />
      {/* <div className={styles.imageFooter}>
        <Image src={"/logo.png"} alt={"my logo"} width={100} height={100} />
      </div> */}

      <div className={styles.LinksFooter}>
        <Link href={"/projects"}>{t("nav.pro")}</Link>
        <Link href={"/tools"}>{t("nav.tools")}</Link>
        <Link href={"/contact"}>{t("nav.contact")}</Link>
      </div>

      <div className={styles.outLinks}>
        <a
          className={styles.iconLink}
          aria-label="My Facebook Account"
          href={"https://www.facebook.com/abdo.awny.9/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-facebook"></span>
          {/* <i className="pi pi-facebook"></i> */}
        </a>
        <a
          className={styles.iconLink}
          aria-label="My Twitter Account"
          href={"https://twitter.com/Abdelrahman2486"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-twitter"></span>
          {/* <i className="pi pi-twitter"></i> */}
        </a>
        <a
          className={styles.iconLink}
          aria-label="My Linkedin Account"
          href={"https://www.linkedin.com/in/abdelrahman-awny/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon-linkedin"></span>
          {/* <i className="pi pi-linkedin"></i> */}
        </a>
      </div>

      <div className={styles.copy}>
        © 2022{" "}
        <div className={styles.imageFooter}>
          {/* <Image src={"/logo.png"} alt={"my logo"} width={50} height={50} /> */}
          <Logo w={50} h={50} />
        </div>
        All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
