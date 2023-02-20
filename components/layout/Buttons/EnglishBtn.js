import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/layout/Nav.module.css";

const EnglishBtn = () => {
  const { i18n } = useTranslation();

  const changEN = () => {
    window.localStorage.setItem("lan", "en");
    i18n.changeLanguage("en");
  };
  return (
    <button
      onClick={() => changEN()}
      className={`w-full p-link flex align-items-center ${styles.LangBtn}`}
    >
      <div className={styles.lang}>
        <div className={styles.ImageLang}>
          <Image src={"/images/en.webp"} alt={"logo"} width={30} height={16} />
        </div>
        English
      </div>
    </button>
  );
};

export default EnglishBtn;
