import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Qualifications = () => {
  const [active, setActive] = useState(1);
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title">{t("qulif.qulif")}</h2>
      <div className={styles.tabs}>
        <button
          onClick={() => setActive(1)}
          className={`say ${active === 1 && styles.active}`}
        >
          <span className={`icon-briefcase ${styles.iconButton}`}></span>
          {t("qulif.exp")}
        </button>
        <button
          onClick={() => setActive(0)}
          className={`say ${active === 0 && styles.active}`}
        >
          {/* <i className="pi pi-send"></i> */}
          <span className={`icon-education ${styles.iconButton}`}></span>
          {t("qulif.Edu")}
        </button>

        <button
          onClick={() => setActive(2)}
          className={`say ${active === 2 && styles.active}`}
        >
          {/* <i className="pi pi-send"></i> */}
          <span className={`icon-books ${styles.iconButton}`}></span>
          {t("qulif.course")}
        </button>
      </div>

      <div className={styles.Qualif_Section}>
        {active === 0 && (
          <div className={styles.Qualif_Content}>
            <div className={styles.Qualif_Data}>
              <div>
                <h3 className={styles.title}>Bachelor of Computer Science</h3>
                <span className={styles.subTitle}>M.E.T</span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2018-2022
                </div>
              </div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        )}

        {active === 1 && (
          <div className={styles.Qualif_Content}>
            {/* Experince */}
            <div className={styles.Qualif_Data}>
              <div>
                <h3 className={styles.title}>Deltawy Company</h3>
                <span className={styles.subTitle}>
                  El Mahalla El Kubra - Egypt
                </span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2021-2022
                </div>
              </div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
            <div className={styles.Qualif_Data}>
              <div></div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
              <div>
                <h3 className={styles.title}>Upwork</h3>
                <span className={styles.subTitle}>Freelancer</span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2022-2023
                </div>
              </div>
            </div>
            <div className={styles.Qualif_Data}>
              <div>
                <h3 className={styles.title}>Meta Misr Technologies</h3>
                <span className={styles.subTitle}>Dumyata - Egypt</span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2023-2023
                </div>
              </div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        )}

        {active === 2 && (
          <div className={styles.Qualif_Content}>
            {/* Courses */}
            <div className={styles.Qualif_Data}>
              <div>
                <h3 className={styles.title}>
                  Front End Development Using React (150 hours)
                </h3>
                <span className={styles.subTitle}>ITI</span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2021 - 2022
                </div>
              </div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
            <div className={styles.Qualif_Data}>
              <div></div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
              <div>
                <h3 className={styles.title}>
                  Front End Development Using React
                </h3>
                <span className={styles.subTitle}>MAHARATECH </span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2021 - 2022
                </div>
              </div>
            </div>
            <div className={styles.Qualif_Data}>
              <div>
                <h3 className={styles.title}>
                  Application development course using JavaScript
                </h3>
                <span className={styles.subTitle}>Hsoub Academy</span>
                <div className={styles.calender}>
                  <span
                    className={`icon-calendar-check-o ${styles.iconquli}`}
                  ></span>
                  2022 - present
                </div>
              </div>
              <div className={styles.round}>
                <span className={styles.rounder}></span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualifications;
