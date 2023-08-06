import Image from "next/legacy/image";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";
import { useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { useDispatch } from "react-redux";
import { PostContact } from "@/store/SubscribeSlice";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import { useTranslation } from "react-i18next";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import MostVisited from "@/components/MostVisited/MostVisited";

const Contact = ({ Lang }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useRef(null);
  const dispatch = useDispatch();
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Successfully Send  ",
      life: 3000,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      detail: "Please Enter All Required Data",
      life: 3000,
    });
  };
  const SendData = () => {
    if (
      name.length <= 0 ||
      phone.length <= 0 ||
      email.length <= 0 ||
      message.length <= 0
    ) {
      showError();
    } else {
      const data = {
        name,
        mobile: phone,
        email,
        message,
      };
      dispatch(PostContact(data))
        .unwrap()
        .then((res) => {
          if (res.success) {
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            showSuccess();
          }
        });
    }
  };

  return (
    <div
      className="container-xxl"
      style={{
        textAlign: Lang === "Ar" ? "right" : "left",
        direction: Lang === "Ar" ? "rtl" : "ltr",
      }}
    >
      <Toast ref={toast} />
      <div className="cramp">
        <Link href={"/"} className="frist">
          {t("menu.home")}
        </Link>
        <span>{`>`}</span>
        <Link href={"/contact"}>{t("menu.about.contact")}</Link>
      </div>
      <div className="row justify-content-between ">
        <div className="col-md-12 MarginSection">
          <div className={"MainImage_cont"}>
            <Image
              src={"/images/about-us.jpg"}
              alt="name"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
        </div>
        <div className="col-md-8  ">
          <div className="row">
            <div className="col-12">
              <h2
                style={{
                  textAlign: Lang === "Ar" ? "right" : "left",
                }}
                className="main_title "
              >
                {t("menu.contact_number")}
              </h2>
              <div className="row  justify-content-between  ">
                <div className="col-12">
                  <div className={styles.info}>
                    <div className={styles.social}>
                      <GoLocation />
                      Rue Rousseau 5, 1201 Geneva, Switzerland.
                    </div>
                    <div className={`${styles.social} ${styles.social_number}`}>
                      <AiOutlinePhone />
                      <span>+41763235054</span>
                    </div>
                    <div className={styles.social}>
                      <AiOutlineMail />
                      info@migeneva.com
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className={styles.MapLocation}>
                    <iframe
                      loading="lazy"
                      title="map"
                      src={`https://maps.google.com/maps?q=46.206734517448545,6.143927470300058&z=15&output=embed`}
                      className={styles.location}
                      style={{ border: 0 }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h2
                style={{
                  textAlign: Lang === "Ar" ? "right" : "left",
                }}
                className="main_title "
              >
                {t("menu.about.contact")}
              </h2>
              <form>
                <div className={styles.contact_Input}>
                  <label> {t("menu.name")}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.contact_Input}>
                  <label> {t("menu.mobile")}</label>
                  <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className={styles.contact_Input}>
                  <label>{t("menu.email")}</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.contact_Input}>
                  <label>{t("menu.message")}</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="2"
                  ></textarea>
                  {/* <input type="te" /> */}
                </div>
                <div className={styles.contact_Input}>
                  <button
                    name="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      SendData();
                      // router.push("/shop");
                    }}
                    type="submit"
                    aria-label="submit"
                  >
                    {t("menu.submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <Subscribe type={"about_shadow"} />
          <MostVisited />
        </div>
      </div>
    </div>
  );
};

export default Contact;
export async function getServerSideProps({ params }) {
  return {
    props: {
      Lang: params.LangID,
    },
  };
}
