import styles from "@/styles/Home.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
const ContactSection = () => {
  const { t } = useTranslation();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_b42z1t4",
        "template_xxfi48f",
        form.current,
        "6LPWx9kNa-BcI4Ipe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container">
      <h2 className="main-title">{t("contact.contact")}</h2>
      <div className={styles.Touch_contant}>
        <div className={`row ${styles.touch_row}`}>
          <div className="col-md-5">
            <div className={`${styles.touch_information}`}>
              <div className={styles.touch_left}>
                <div className={styles.touch_icon}>
                  <span className="icon-envelope"></span>
                </div>
                <div className={styles.touch_info}>
                  <h3>{t("contact.email")}</h3>
                  <span>abdelrahman.awny22@gmail.com</span>
                </div>
              </div>
              <div className={styles.touch_left}>
                <div className={styles.touch_icon}>
                  <span className="icon-whatsapp"></span>
                </div>
                <div className={styles.touch_info}>
                  <h3>{t("contact.whats")}</h3>
                  <a
                    aria-label="My Phone Number"
                    href={"https://wa.me/00201012894508"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +201012894508
                  </a>
                  {/* <span>+01012894508</span> */}
                </div>
              </div>
              <div className={styles.touch_left}>
                <div className={styles.touch_icon}>
                  <span className="icon-paper-plane"></span>
                </div>
                <div className={styles.touch_info}>
                  <h3>{t("contact.messanger")}</h3>
                  <a
                    aria-label="My Phone Number"
                    href={"https://m.me/abdo.awny.9"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    abdo.awny.9
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            {/* onSubmit={sendEmail} */}
            <form ref={form} className={styles.touch_form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder={`${t("contact.name")}`}
                name="name"
              />
              <input
                type="text"
                placeholder={`${t("contact.email")}`}
                name="email"
              />
              <input
                type="text"
                placeholder={`${t("contact.proName")}`}
                name="subject"
              />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder={`${t("contact.descr")}`}
              ></textarea>
              <input
                type="submit"
                className={`say ${styles.sendButton}`}
                value={`${t("contact.sendMess")}`}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
