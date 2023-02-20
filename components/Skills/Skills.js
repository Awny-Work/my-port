import styles from "@/styles/Home.module.css";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title">{t("skill")}</h2>
      <div className={styles.Slills}>
        <div>
          <span className="icon-css3"></span>
        </div>
        <div>
          <span className="icon-html5"></span>
        </div>
        <div>
          <span className="icon-javascript"></span>
        </div>
        <div>
          <span className="icon-bootstrap"></span>
        </div>

        <div>
          <span className="icon-react"></span>
        </div>
        <div>
          <span class="icon-framer"></span>
        </div>
        <div>
          <span className="icon-redux"></span>
        </div>
        <div>
          <span className="icon-postman"></span>
        </div>
      </div>
      <div className={styles.Slills}>
        <div>
          <span className="icon-json"></span>
        </div>
        <div>
          <span className="icon-visualstudiocode"></span>
        </div>

        <div>
          <span className="icon-github"></span>
        </div>
        <div>
          <span className="icon-git"></span>
        </div>
        <div>
          <span className="icon-adobepremiere"></span>
        </div>
        <div>
          <span className="icon-discord"></span>
        </div>
        <div>
          <span className="icon-netlify"></span>
        </div>
        <div>
          <span className="icon-notion"></span>
        </div>
        <div>
          <span className="icon-microsoftoffice"></span>
        </div>
        <div>
          <span className="icon-overleaf"></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
