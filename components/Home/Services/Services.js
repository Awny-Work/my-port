import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className=" container Services" id={"services"}>
      <h2 className="main-title">{t("services.services")}</h2>

      {/* <p className="text-center">what i provide </p> */}
      <div className="row  align-items-center  justify-content-center">
        <div className="col-md-12 col-lg-6 srvImageCol">
          <div className="ImageServ">
            <Image
              src={"/images/servi.png"}
              alt={"my Services"}
              layout={"fill"}
              objectFit={"contain"}
            />
          </div>
        </div>
        <div className=" col-lg-12">
          <div className="row">
            <div className=" col-lg-6 servCol">
              <div className="service">
                <span class="icon-color_lens"></span>
                <div>
                  <h3>{t("services.Ui")}</h3>
                  <p>
                    {t("services.UiDe")}
                    {/* Process Of Enhancing User Satisfaction With A Product By
                    Improving The Usability, Accessibility, And Pleasure
                    Provided In The Interaction. */}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6 servCol">
              <div className="service">
                <span class="icon-tools"></span>
                <div>
                  <h3>Web Desgin</h3>
                  <p>
                    Web Design Encompasses Many Different Skills And Disciplines
                    In The Production And Maintenance Of Websites.
                  </p>
                </div>
              </div>
            </div> */}
            <div className="col-lg-6 servCol">
              <div className="service">
                <span class="icon-important_devices"></span>
                <div>
                  <h3>{t("services.web")}</h3>
                  <p>{t("services.webDe")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 servCol">
              <div className="service">
                <span class="icon-mobile"></span>
                <div>
                  <h3>{t("services.mobile")}</h3>
                  <p>{t("services.mobileDe")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
