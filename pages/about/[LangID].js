import Image from "next/legacy/image";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";
// import Cookies from "js-cookie";
import Subscribe from "@/components/Home/Subscribe/Subscribe";
import MostVisited from "@/components/MostVisited/MostVisited";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAbout } from "@/store/HomeSlice";

const About = ({ Lang }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { AboutArr } = useSelector((state) => state.HomeSlice);
  useEffect(() => {
    if (!AboutArr) {
      dispatch(getAbout());
    }
  });

  return (
    <div
      className="container-xxl"
      style={{
        textAlign: Lang === "Ar" ? "right" : "left",
        direction: Lang === "Ar" ? "rtl" : "ltr",
      }}
    >
      <div className="cramp">
        <Link href={"/"} className="frist">
          {t("menu.home")}
        </Link>
        <span>{`>`}</span>
        <Link href={"/about"}> {t("menu.about.about")}</Link>
      </div>
      <div className="row justify-content-between ">
        <div className="col-md-12">
          <div className={"MainImage_cont"}>
            <Image
              // src={"/images/main_img.jpg"}
              src={"/images/about-us.jpg"}
              alt="name"
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
            />
          </div>
        </div>
        <div className="col-md-8 mt-2 ">
          <div className="row">
            <div className="col-12">
              <h2
                style={{
                  textAlign: Lang === "Ar" ? "right" : "left",
                }}
                className="main_title "
              >
                {t("menu.about.about")}
              </h2>

              <div className="About_container article_body">
                {AboutArr && (
                  <div
                    id={"artContent"}
                    dangerouslySetInnerHTML={{ __html: AboutArr.long_about }}
                  ></div>
                )}
                <p className="mt-5 Team_Title">
                  ويتشكل الهيكل التنظيمي للمركز كالتالي:
                </p>
              </div>
              <div className="col-12">
                <div className="row   justify-content-center align-content-center ">
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/name1.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"center"}
                          alt=" عبد الله"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>د. عبد الله إبراهيم</h3>
                        <p>Senior Adviser</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12"></div>

                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/abdo.jpeg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="abdo"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. لطفى سالمان </h3>
                        <p>Director</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12"></div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/mohamed.jpg"}
                          layout="fill"
                          objectFit="cover"
                          objectPosition={"top"}
                          alt="mohamed"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. محمد الفقي</h3>
                        <p>المدير الأكاديمي</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/mostafa.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="mostafa"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. مصطفى فضل </h3>
                        <p>رئيس تحرير الموقع الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/سمية.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="سمية"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>د. سمية السيد</h3>
                        <p> Senior Researcher </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/نوار.png"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="نوار"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. نوار عبد الرحمن </h3>
                        <p>باحث</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/رضوي.jpeg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="رضوى"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>د. رضوى قطيط</h3>
                        <p>مسؤولة قسم الترجمة</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12"></div> */}
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/سلمان.png"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="سلمان"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. سلمان علاء</h3>
                        <p>مصحح اللغة العربية</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12"></div> */}
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/مروان.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="مروان"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. مروان قدري</h3>
                        <p>مسؤول الموقع الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12"></div> */}
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/اسلام.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="إسلام"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>م. إسلام شعبان</h3>
                        <p>المدير الفني للموقع الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-12"></div> */}
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/ندي.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="نادين"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. نادين المهدي</h3>
                        <p>مسؤولة الترويج الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-5 text-enter">
                    <div className={"Team_Container"}>
                      <div className="Team_image_cont">
                        <Image
                          src={"/images/أميرة.jpg"}
                          objectFit="cover"
                          layout="fill"
                          objectPosition={"top"}
                          alt="نادين"
                        />
                      </div>
                      <div className="Team_Info">
                        <h3>أ. أميرة</h3>
                        <p>مسؤولة الترويج الإلكتروني</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 mt-2">
          <Subscribe type={"about_shadow"} />
          <MostVisited />
        </div>
      </div>
    </div>
  );
};

export default About;

export async function getServerSideProps({ params }) {
  return {
    props: {
      Lang: params.LangID,
    },
  };
}
