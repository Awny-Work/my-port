import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import styles from "@/styles/Home.module.css";
const Certification = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h2 className="main-title">{t("certification.certification")}</h2>
      <div className="row">
        <div className="col-md-6">
          <div className={styles.Certif}>
            <div className={styles.ImaeContServ}>
              <Image
                src={"/images/ITI.jpg"}
                alt={"ITI"}
                layout={"fill"}
                objectFit={"cover"}
                className={styles.imageScroll}
                objectPosition={"top"}
              />
              <div className={styles.iconsCer}>
                <span class="icon-eye"></span>
              </div>
            </div>
            <h3>Front End Development Using React (150 hours) - ITI</h3>
            <div className={styles.viewCer}>
              <h4> {t("certification.view")}</h4>

              <p>
                <span class="icon-eye"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.Certif}>
            <div className={styles.ImaeContServ}>
              <Image
                src={"/images/ITI2.jpg"}
                alt={"ITI"}
                layout={"fill"}
                objectFit={"cover"}
                className={styles.imageScroll}
                objectPosition={"top"}
              />
              <div className={styles.iconsCer}>
                <span class="icon-eye"></span>
              </div>
            </div>
            <h3>Front End Development Using React - MAHARATECH </h3>
            <div className={styles.viewCer}>
              <h4> {t("certification.view")}</h4>
              <p>
                <span class="icon-eye"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
