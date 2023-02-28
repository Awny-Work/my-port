// import Image from "next/legacy/image";
import Link from "next/link";
import styles from "@/styles/layout/Nav.module.css";
import { useRef, useState, useEffect } from "react";
// import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import { Menu } from "primereact/menu";
import ArabicBtn from "../Buttons/ArabicBtn";
import EnglishBtn from "../Buttons/EnglishBtn";
// import ToogleTheme from "../ToogleTheme/ToogleTheme";
import dynamic from "next/dynamic";
// import Logo from "";
const ToogleTheme = dynamic(() => import("../ToogleTheme/ToogleTheme"), {
  ssr: false,
  // loading: () => "Header...",
});
const Logo = dynamic(() => import("../Logo/Logo"), {
  ssr: false,
  // loading: () => "Header...",
});
const NavBar = () => {
  let items = [
    {
      template: () => <EnglishBtn />,
    },
    {
      template: () => <ArabicBtn />,
    },
  ];
  const menu = useRef(null);
  const { t } = useTranslation();

  const [show, setShow] = useState(false);

  // const [activeTheme, setActiveTheme] = useState(
  //   window.localStorage.getItem("ATWThem")
  // );

  // const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   if (!theme) {
  //     setTheme(window.localStorage.getItem("ATWThem"));
  //   }
  // }, [theme]);

  // const [activeTheme, setActiveTheme] = useState(
  //   document.body.dataset.theme == "light" ? "dark" : "light"
  // );
  // // const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  // useEffect(() => {
  //   // window.localStorage.setItem("ATWThem", activeTheme);

  //   const listenStorageChange = () => {
  //     setActiveTheme(window.localStorage.getItem("ATWThem"));
  //   };
  //   window.addEventListener("storage", listenStorageChange);
  //   return () => window.removeEventListener("storage", listenStorageChange);
  // }, [activeTheme]);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.navContent}>
          <Link href={"/"}>
            <Logo w={50} h={50} />{" "}
            {/* <Image src={"/favicon.ico"} alt={"Abdelrahman Logo"} width={80} height={80} /> */}
          </Link>
          <div
            className={`${styles.links} ${
              show ? styles.showNav : styles.HideNav
            }`}
          >
            <Link href={"/"}>
              {/* <i className="pi pi-home"></i> */}
              <span className="icon-home"></span>
              {t("nav.home")}
            </Link>
            <Link href={"/projects"}>
              {/* <i className="pi pi-home"></i> */}
              <span className="icon-briefcase"></span>
              {t("nav.pro")}
            </Link>
            {/* <Link href={"/tools"}>
              <span className="icon-tools"></span>
              {t("nav.tools")}
            </Link> */}
            <Link href={"/#skills"}>
              {/* <i className="pi pi-home"></i> */}
              <span className="icon-lightbulb-o"></span>
              {t("nav.skill")}
            </Link>

            <Link href={"/#services"}>
              <span className="icon-miscellaneous_services"></span>
              {/* <i className="pi pi-home"></i> */}
              {t("nav.services")}
            </Link>
            <Link href={"/contact"}>
              {/* <i className="pi pi-home"></i> */}
              <span className="icon-contact_mail"></span>
              {t("nav.contact")}
            </Link>
            {/* <i
              className={`pi pi-times `}
            
            ></i> */}

            <div
              className={styles.langSec}
              onClick={(e) => menu.current.toggle(e)}
            >
              <div className={styles.langDiv}>
                <span className={`icon-language ${styles.langIcon}`}></span>
                {t("nav.lang")}
              </div>
              <Menu model={items} popup ref={menu} />
            </div>

            <ToogleTheme />
          </div>

          <div className={styles.MeutBtnCont}>
            <button
              aria-label="menu"
              name="menu"
              className={`${styles.menu_Btn} ${show && styles.BtnActive}`}
              onClick={() => setShow(!show)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
