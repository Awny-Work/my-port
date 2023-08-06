import Head from "next/head";
import Image from "next/legacy/image";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import { DeferredContent } from "primereact/deferredcontent";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "@/store/HomeSlice";
import Link from "next/link";
// import LoadingScreen from "@/components/Home/LoadingScreen/LoadingScreen";
import Loading from "@/components/layout/Loading/Loading";
const Header = dynamic(() => import("@/components/Home/Header/Header"), {
  loading: () => <Loading />,
  ssr: false,
});
const LangChaneg = dynamic(
  () => import("@/components/layout/LangChaneg/LangChaneg"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const MostVisited = dynamic(
  () => import("@/components/MostVisited/MostVisited"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const Subscribe = dynamic(
  () => import("@/components/Home/Subscribe/Subscribe"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const FollowUs = dynamic(
  () => import("@/components/layout/FlllowUs/FlllowUs"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const MeetingCard = dynamic(
  () => import("@/components/layout/Card/MeetingCard"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const Card = dynamic(() => import("@/components/layout/Card/Card"), {
  loading: () => <p></p>,
  ssr: false,
});

export default function Home() {
  const dispatch = useDispatch();
  const { HomeArr, isHomeLoading } = useSelector((state) => state.HomeSlice);

  useEffect(() => {
    if (!HomeArr) {
      dispatch(getHome());
    }
  }, [dispatch, HomeArr]);

  const Layout_1 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 1);
  const Layout_2 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 2);
  // console.log(Layout_2);
  const Layout_3 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 3);

  const Layout_4 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 4);
  const Layout_4_1 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 4);
  const Layout_5 =
    HomeArr &&
    HomeArr.categories_with_articles.filter((ele) => ele.home_layout === 5);

  return (
    <>
      {/* {isHomeLoading && <Loading />} */}
      {/* <Loading /> */}
      <Head>
        <meta name="description" content="cdc For Strategic Analysis " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <LangChaneg>
          <div style={{ minHeight: "280px" }}>
            <DeferredContent>
              <div className="row">
                <div className="col-md-8 TopSectionHeader ToSectionCarisel ">
                  <Header />
                </div>
                <div className="d-none d-lg-block col-lg-4 TopSectionHeader">
                  {Layout_1 && (
                    <>
                      <Link
                        href={`/tags/${1}/${Cookies.get("MIgLanSymbol")}`}
                        style={{
                          textAlign:
                            Cookies.get("MIgdir") === "true" ? "right" : "left",
                        }}
                        className="image_banner_herezontal"
                      >
                        <div className="ImageCont_herezoontal">
                          <Image
                            src={"/images/e3lan.jpg"}
                            alt="Test"
                            layout="fill"
                            objectFit="fill"
                            objectPosition={"center"}
                          />
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </DeferredContent>
          </div>

          <DeferredContent>
            <div className="row MarginSection">
              <div className="col-lg-12">
                <div className="row ">
                  {Layout_1 && (
                    <div className="col-lg-8" style={{ minHeight: "300px" }}>
                      <Link
                        href={`${
                          Layout_1[0]?.articles[0].sub_categories
                            ? `/maincategory/${Layout_1[0].category_name.replace(
                                /\s/g,
                                "-"
                              )}/${Layout_1[0]?.category_id}/${Cookies.get(
                                "MIgLanSymbol"
                              )}`
                            : `/category/${
                                Layout_1[0]?.category_id
                              }/${Cookies.get("MIgLanSymbol")}`
                        }`}
                        // href={`/maincategory/${Layout_1[0].category_name.replace(
                        //   /\s/g,
                        //   "-"
                        // )}/${Layout_1[0]?.category_id}/${Cookies.get(
                        //   "MIgLanSymbol"
                        // )}`}
                        style={{
                          textAlign:
                            Cookies.get("MIgdir") === "true" ? "right" : "left",
                        }}
                        className="main_title"
                      >
                        {Layout_1[0].category_name}
                      </Link>

                      {Layout_1 && (
                        <Card
                          {...Layout_1[0].articles[0]}
                          writer={true}
                          type={"LrgCRD"}
                          person={true}
                        />
                      )}
                    </div>
                  )}

                  <div
                    className="col-lg-4 d-flex flex-column justify-content-start"
                    style={{ minHeight: "300px" }}
                  >
                    {Layout_2 && Layout_2.length > 0 && (
                      <div>
                        <Link
                          // href={`/category/${
                          //   Layout_2[0]?.category_id
                          // }/${Cookies.get("MIgLanSymbol")}`}

                          href={`${
                            Layout_2[0]?.articles[0].sub_categories
                              ? `/maincategory/${Layout_2[0].category_name.replace(
                                  /\s/g,
                                  "-"
                                )}/${Layout_2[0]?.category_id}/${Cookies.get(
                                  "MIgLanSymbol"
                                )}`
                              : `/category/${
                                  Layout_2[0]?.category_id
                                }/${Cookies.get("MIgLanSymbol")}`
                          }`}
                          style={{
                            textAlign:
                              Cookies.get("MIgdir") === "true"
                                ? "right"
                                : "left",
                          }}
                          className="main_title "
                        >
                          {Layout_2[0]?.category_name}
                        </Link>
                        <div className="row">
                          {Layout_2[0].articles.map((ele) => {
                            const PathName = ele?.title?.replace(/\s/g, "-");
                            return (
                              <Link
                                href={`/article/${PathName}/${
                                  ele.id
                                }/${Cookies.get("MIgLanSymbol")}`}
                                className={`col-lg-12 ${styles.latestCol}`}
                                key={ele.id}
                                style={{
                                  direction:
                                    Cookies.get("MIgdir") === "true"
                                      ? "rtl"
                                      : "ltr",
                                }}
                              >
                                <div className="latest">
                                  <div
                                    className="latestInfo"
                                    style={{
                                      textAlign:
                                        Cookies.get("MIgdir") === "true"
                                          ? "right"
                                          : "left",
                                    }}
                                  >
                                    <h3>{ele?.title}</h3>
                                    <p>{ele?.sub_title}</p>
                                    <h4>{ele?.authors[0]?.name}</h4>
                                  </div>
                                  <div className="imageCont imageLatestCont">
                                    <Image
                                      width={100}
                                      height={100}
                                      // src={ele?.main_image}
                                      src={`${process.env.customKey}/${ele?.main_image}`}
                                      layout="fill"
                                      objectFit="contain"
                                      alt="name"
                                    />
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DeferredContent>
          <div style={{ minHeight: "300px" }}>
            <DeferredContent>
              {Layout_3 && Layout_3.length > 0 && (
                <div>
                  <Link
                    // href={`/category/${Layout_3[0]?.category_id}/${Cookies.get(
                    //   "MIgLanSymbol"
                    // )}`}
                    href={`${
                      Layout_3[0]?.articles[0].sub_categories
                        ? `/maincategory/${Layout_3[0].category_name.replace(
                            /\s/g,
                            "-"
                          )}/${Layout_3[0]?.category_id}/${Cookies.get(
                            "MIgLanSymbol"
                          )}`
                        : `/category/${Layout_3[0]?.category_id}/${Cookies.get(
                            "MIgLanSymbol"
                          )}`
                    }`}
                    style={{
                      textAlign:
                        Cookies.get("MIgdir") === "false" ? "left" : "right",
                    }}
                    className={`main_title `}
                  >
                    {Layout_3[0]?.category_name}
                  </Link>
                  <div
                    className="row MarginSection"
                    style={{
                      minHeight: "300px",
                      // flexDirection:
                      //   Cookies.get("MIgdir") === "true" ? "row" : "row-reverc",
                      // test
                    }}
                  >
                    {Layout_3.map((ele) => {
                      return ele?.articles.slice(0, 3).map((el) => {
                        return (
                          <div className="col-lg-4" key={el.id}>
                            <Card
                              {...el}
                              writer={false}
                              type={"tiny"}
                              image={"/images/card 2.png"}
                              person={"/images/person.png"}
                            />
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              )}
            </DeferredContent>
          </div>

          <div
            style={{
              minHeight: "500px",
            }}
          >
            <DeferredContent>
              <div
                className="row MarginSection"
                style={{
                  minHeight: "500px",
                }}
              >
                {Layout_4 && (
                  <div className="col-12">
                    <Link
                      // href={`/category/${Layout_4[0]?.category_id}/${Cookies.get(
                      //   "MIgLanSymbol"
                      // )}`}
                      href={`${
                        Layout_4[0]?.articles[0].sub_categories
                          ? `/maincategory/${Layout_4[0].category_name.replace(
                              /\s/g,
                              "-"
                            )}/${Layout_4[0]?.category_id}/${Cookies.get(
                              "MIgLanSymbol"
                            )}`
                          : `/category/${
                              Layout_4[0]?.category_id
                            }/${Cookies.get("MIgLanSymbol")}`
                      }`}
                      style={{
                        textAlign:
                          Cookies.get("MIgdir") === "true" ? "right" : "left",
                      }}
                      className="main_title"
                    >
                      {Layout_4[0]?.category_name}
                    </Link>
                  </div>
                )}

                {Layout_4 && (
                  <div className="col-lg-8">
                    <Card
                      {...Layout_4[0].articles[0]}
                      writer={true}
                      type={"LrgCRD"}
                      // image={"/images/card 1.png"}
                      person={true}
                    />
                  </div>
                )}
                <div className="col-lg-4 d-flex flex-column justify-content-between ">
                  <div className="row">
                    {Layout_4_1 &&
                      Layout_4_1.map((ele) => {
                        return ele?.articles.slice(1, 5).map((el) => {
                          const PathName = el?.title.replace(/\s/g, "-");
                          return (
                            <Link
                              href={`/article/${PathName}/${
                                el.id
                              }/${Cookies.get("MIgLanSymbol")}`}
                              className={`col-lg-12 ${styles.latestCol}`}
                              key={el.id}
                            >
                              <div
                                className="latest"
                                style={{
                                  direction:
                                    Cookies.get("MIgdir") === "true"
                                      ? "rtl"
                                      : "ltr",
                                }}
                              >
                                <div
                                  className="latestInfo"
                                  style={{
                                    textAlign:
                                      Cookies.get("MIgdir") === "true"
                                        ? "right"
                                        : "left",
                                  }}
                                >
                                  <h3>{el?.title}</h3>
                                  <p>{el?.sub_title}</p>
                                  <h4>{el?.authors[0].name}</h4>
                                </div>
                                <div className="imageCont imageLatestCont">
                                  <Image
                                    width={100}
                                    height={100}
                                    // src={el?.main_image}
                                    src={`${process.env.customKey}/${el?.main_image}`}
                                    alt="name"
                                    layout={"fill"}
                                    objectFit="contain"
                                  />
                                </div>
                              </div>
                            </Link>
                          );
                        });
                      })}
                    <div className="col-lg-12 mt-4">
                      <Subscribe />
                    </div>
                  </div>
                </div>
              </div>
            </DeferredContent>
          </div>

          {/* <DeferredContent> */}
          <div className="row MarginSection" style={{ minHeight: "300px" }}>
            {Layout_5 && (
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12">
                    <Link
                      // href={`/category/${
                      //   Layout_5[0]?.category_id
                      // }/${Cookies.get("MIgLanSymbol")}`}

                      href={`${
                        Layout_5[0]?.articles[0].sub_categories
                          ? `/maincategory/${Layout_5[0].category_name.replace(
                              /\s/g,
                              "-"
                            )}/${Layout_5[0]?.category_id}/${Cookies.get(
                              "MIgLanSymbol"
                            )}`
                          : `/category/${
                              Layout_5[0]?.category_id
                            }/${Cookies.get("MIgLanSymbol")}`
                      }`}
                      style={{
                        textAlign:
                          Cookies.get("MIgdir") === "true" ? "right" : "left",
                      }}
                      className="main_title "
                    >
                      {Layout_5[0]?.category_name}
                    </Link>
                  </div>
                  {Layout_5.map((ele) => {
                    return ele?.articles.map((el) => {
                      return (
                        <div className="col-md-6 col-lg-6" key={el?.id}>
                          <MeetingCard
                            {...el}
                            type={"tiny"}
                            // image={"/images/card 3.png"}
                          />
                        </div>
                      );
                    });
                  })}
                </div>
              </div>
            )}

            <div className="col-lg-4">
              <div>
                <MostVisited />
              </div>{" "}
              <FollowUs />
            </div>
          </div>
          {/* </DeferredContent> */}
        </LangChaneg>
      </>
    </>
  );
}
