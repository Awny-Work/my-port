import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/layout/Nav.module.css";

const ArabicBtn = () => {
  const { i18n } = useTranslation();

  const changAR = () => {
    window.localStorage.setItem("lan", "ar");
    i18n.changeLanguage("ar");
  };
  return (
    <button
      onClick={() => changAR()}
      className={`w-full p-link flex align-items-center ${styles.LangBtn}`}
    >
      <div className={styles.lang}>
        <div className={styles.ImageLang}>
          <Image
            src={"/images/ar.webp"}
            alt={"logo"}
            width={30}
            height={16}
            // layout={"fill"}
            // objectFit={"contain"}
          />
        </div>
        العربية
      </div>
    </button>
  );
};

export default ArabicBtn;
