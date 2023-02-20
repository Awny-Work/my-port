import styles from "@/styles/Home.module.css";
import { useTranslation } from "react-i18next";
const Study = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title">{t("study")} </h2>

      <div className={styles.Slills}>
        <div>
          <span className="icon-sass"></span>
        </div>
        <div>
          <span className="icon-tailwindcss"></span>
        </div>
        <div>
          <span className="icon-typescript"></span>
        </div>
        <div>
          <span className="icon-mongodb"></span>
        </div>
        <div>
          <span className="icon-node-dot-js"></span>
        </div>
        <div>
          <span className="icon-firebase"></span>
        </div>
      </div>
    </div>
  );
};

export default Study;
