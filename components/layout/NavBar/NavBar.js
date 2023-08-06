import { useState, useEffect, useRef, useCallback } from "react";
import styles from "@/styles/layouts/Navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import Cookies from "js-cookie";
import Image from "next/legacy/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, getMenu } from "@/store/HomeSlice";
import { Sidebar } from "primereact/sidebar";
import { getSearch } from "@/store/CategorySlice";
import { useRouter } from "next/router";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useTranslation } from "react-i18next";
import { Dialog } from "primereact/dialog";
const Navbar = ({ overHeight }) => {
  const [DialogVisable, setDialogVisible] = useState(false);
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const { MenuArr, LangaugeArr, SocialArr } = useSelector(
    (state) => state.HomeSlice
  );
  // useEffect(() => {
  //   if (!MenuArr) {
  //     dispatch(getMenu());
  //   }
  // }, [MenuArr, dispatch]);
  useEffect(() => {
    if (router.query.LangID !== undefined) {
      if (router.query.LangID === "Ar") {
        Cookies.set("MIgdir", "true");
        Cookies.set("MIgLanSymbol", "Ar");
        i18n.changeLanguage("Ar");
        if (!MenuArr) {
          dispatch(getMenu("Ar"));
        }
      } else if (router.query.LangID === "En") {
        Cookies.set("MIgdir", "false");
        i18n.changeLanguage("En");
        Cookies.set("MIgLanSymbol", "En");
        if (!MenuArr) {
          dispatch(getMenu("En"));
        }
      }

      // else {
      //   Cookies.set("MIgdir", "true");
      //   Cookies.set("MIgLanSymbol", "Ar");
      //   i18n.changeLanguage("Ar")
      //   if (!MenuArr) {
      //     dispatch(getMenu("Ar"));
      //   }
      // }
    } else {
      // Cookies.set("MIgdir", "true");
      // Cookies.set("MIgLanSymbol", "Ar");
      // i18n.changeLanguage(Cookies.get("MIgLanSymbol"))
      if (!MenuArr) {
        dispatch(getMenu(Cookies.get("MIgLanSymbol")));
        // Cookies.set("MIgdir", "true");
        // Cookies.set("MIgLanSymbol", "Ar");
        // i18n.changeLanguage("Ar")
      }
    }
  }, [router.query.LangID, i18n, MenuArr, dispatch]);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  let typingTimer; //timer identifier
  let doneTypingInterval = 1000;
  const doneTyping = () => {
    dispatch(getSearch(search));
    setToggleSearch(true);
  };
  const { SearchArr } = useSelector((state) => state.CategorySlice);
  const [toggelSearch, setToggleSearch] = useState(false);
  const SerchResult =
    SearchArr &&
    SearchArr.slice(0, 5).map((ele) => {
      const PathName = ele.title.replace(/\s/g, "-");

      return (
        <Link
          href={`/article/${PathName}/${ele.id}/${Cookies.get("MIgLanSymbol")}`}
          key={ele.id}
          className={styles.srarch_li}
          onClick={() => {
            setToggleSearch(false);
          }}
          style={{
            direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
          }}
        >
          <p>{ele.title}</p>
          {ele.main_image ? (
            <Image
              src={`${process.env.customKey}/${ele.imageURL}`}
              // src={ele.main_image}

              alt={ele.name}
              width={80}
              height={40}
            />
          ) : (
            <Image
              src={"/images/test.jpg"}
              alt={ele.name}
              width={60}
              height={40}
            />
          )}
        </Link>
      );
    });
  const intervalIDRef = useRef(null);
  const startTimer = useCallback(() => {
    intervalIDRef.current = setTimeout(() => {
      setDialogVisible(false);
    }, 1500);
  }, []);
  // const stopTimer = useCallback(() => {
  //   clearInterval(intervalIDRef.current);
  //   setDialogVisible(false);
  //   intervalIDRef.current = null;
  // }, []);

  useEffect(() => {
    return () => clearTimeout(intervalIDRef.current); // to clean up on unmount
  }, []);
  return (
    <div
      className={styles.navbar}
      style={{
        direction: "ltr",
      }}
    >
      <Dialog
        visible={DialogVisable}
        style={{ minWidth: "50vw", maxWidth: "95%" }}
        onHide={() => {
          setDialogVisible(false);
        }}
      >
        <div className={`${styles.image_container_DIalog}`}>
          <Image
            layout="fill"
            objectFit="contain"
            src={"/images/Final_logo3_png.png"}
            alt={"logo"}
            priority
          />
        </div>
        <h2 className="text-center">Coming Soon</h2>
      </Dialog>
      <Sidebar
        position={Cookies.get("MIgdir") === "true" ? "right" : "left"}
        visible={visible}
        onHide={() => setVisible(false)}
        showCloseIcon={false}
        style={{
          width: "90vw",
        }}
      >
        <div
          className={`${styles.image_container} `}
          onClick={() => router.push("/")}
        >
          <Image
            layout="fill"
            objectFit="contain"
            src={"/images/Final_logo3_png.png"}
            objectPosition={"center"}
            alt={"logo"}
            priority
          />
        </div>
        <hr />
        <div className={`${styles.iconsSec} ${styles.mobICons}`}>
          {SocialArr &&
            SocialArr.map((ele) => {
              return (
                <a
                  aria-label={ele.name}
                  href={ele.link}
                  key={ele.name}
                  target="_blank"
                >
                  <span className={`${ele.icon}`}></span>
                </a>
              );
            })}
        </div>
        <div className={styles.Mobileslide}>
          <div className={`text-center ${styles.MoblileLinks}`}>
            {MenuArr &&
              MenuArr.map((ele) => {
                return (
                  <Link
                    style={{
                      direction:
                        Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                    }}
                    key={ele.name}
                    onClick={() => {
                      setShow(false);
                      overHeight(false);
                    }}
                    title={" Home"}
                    href={`${
                      ele?.sub_categories.length > 0
                        ? `/maincategory/${ele.name.replace(/\s/g, "-")}/${
                            ele.id
                          }/${Cookies.get("MIgLanSymbol")}`
                        : `/category/${ele.id}/${Cookies.get("MIgLanSymbol")}`
                    }`}
                    className={styles.link}
                  >
                    {ele.name}
                    {/* {ele?.sub_categories && <IoMdArrowDropdown />}
                    {ele?.sub_categories && (
                      <div className={styles.nestedLinks}>
                        {ele.sub_categories.map((e) => {
                          return (
                            <Link
                              key={e.name}
                              onClick={() => {
                                setShow(false);
                                overHeight(false);
                              }}
                              title={""}
                              href={`/category/${e.slug}/${Cookies.get(
                                "MIgLanSymbol"
                              )}`}
                              className={styles.link}
                            >
                              {e.name}
                              {e?.sub_categories && <IoMdArrowDropdown />}
                              {e?.sub_categories && (
                                <div className={styles.nestedLinks}>
                                  {e.sub_categories.map((el) => {
                                    return (
                                      <Link
                                        key={el.name}
                                        onClick={() => {
                                          setShow(false);
                                          overHeight(false);
                                        }}
                                        title={""}
                                        href={`/category/${
                                          el.slug
                                        }/${Cookies.get("MIgLanSymbol")}`}
                                        className={styles.link}
                                      >
                                        {el.name}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )} */}
                  </Link>
                );
              })}

            <Accordion
              style={{
                direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
              }}
            >
              <AccordionTab
                header={`${t("menu.about.about")}`}
                style={{
                  direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                }}
              >
                <div
                  className={`${styles.nestedLinks} ${styles.accNestedLinks}`}
                >
                  <Link
                    onClick={() => {
                      setShow(false);
                      overHeight(false);
                    }}
                    title={""}
                    href={`/about/${Cookies.get("MIgLanSymbol")}`}
                    className={styles.link}
                  >
                    {t("menu.about.about_mig")}
                  </Link>
                  <hr className={styles.HrAbout} />
                  <Link
                    onClick={() => {
                      setShow(false);
                      overHeight(false);
                    }}
                    title={""}
                    href={`/contact/${Cookies.get("MIgLanSymbol")}`}
                    className={styles.link}
                  >
                    {t("menu.about.contact")}
                  </Link>
                </div>
              </AccordionTab>
            </Accordion>
          </div>
          {LangaugeArr && (
            <div className={`${styles.LngSec} ${styles.LangMobile}`}>
              {!Cookies.get("MIgLanSymbol")
                ? LangaugeArr.slice(1).map((ele) => {
                    return (
                      <button
                        // onClick={() => {
                        //   Cookies.set("MIgdir", `${ele.rtl}`);
                        //   Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                        //   i18n.changeLanguage(ele.symbol);
                        //   router.push("/").then(() => {
                        //     // router.replace(router.asPath);
                        //     window.location.reload(false);
                        //   });
                        // }}
                        onClick={() => {
                          if (ele.symbol === "Ar") {
                            i18n.changeLanguage(ele.symbol);
                            dispatch(ShowLoading());
                            Cookies.set("MIgdir", `${ele.rtl}`);
                            Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                            router.push("/").then(() => {
                              // router.replace(router.asPath);
                              window.location.reload(false);
                            });
                            // .catch((err) => {
                            //   console.log(err);
                            // });
                          } else {
                            setDialogVisible(true);
                            startTimer();
                          }
                        }}
                        key={ele.symbol}
                      >
                        {ele.symbol}
                        <span>|</span>{" "}
                        <Image
                          width={30}
                          height={30}
                          // src={ele.imageURL}
                          src={`${process.env.customKey}/${ele.imageURL}`}
                          alt={ele.symbol}
                        />
                      </button>
                    );
                  })
                : LangaugeArr.filter(
                    (ele) => ele.symbol !== Cookies.get("MIgLanSymbol")
                  ).map((ele) => {
                    return (
                      <button
                        // onClick={() => {
                        //   Cookies.set("MIgdir", `${ele.rtl}`);
                        //   Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                        //   i18n.changeLanguage(ele.symbol);

                        //   router.push("/").then(() => {
                        //     // router.replace(router.asPath);
                        //     window.location.reload(false);
                        //   });
                        // }}

                        onClick={() => {
                          if (ele.symbol === "Ar") {
                            i18n.changeLanguage(ele.symbol);
                            dispatch(ShowLoading());
                            Cookies.set("MIgdir", `${ele.rtl}`);
                            Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                            router.push("/").then(() => {
                              // router.replace(router.asPath);
                              window.location.reload(false);
                            });
                            // .catch((err) => {
                            //   console.log(err);
                            // });
                          } else {
                            setDialogVisible(true);
                            startTimer();
                          }
                        }}
                        key={ele.symbol}
                      >
                        {ele.symbol}
                        <span>|</span>{" "}
                        <Image
                          width={30}
                          height={30}
                          src={`${process.env.customKey}/${ele.imageURL}`}
                          // src={ele.imageURL}
                          alt={ele.symbol}
                        />
                      </button>
                    );
                  })}
            </div>
          )}
        </div>
      </Sidebar>
      <div className="container-xxl">
        <div
          className={`row ${styles.center} ${styles.search}`}
          style={{
            flexDirection:
              Cookies.get("MIgdir") === "true" ? "row-reverse" : "row",
          }}
        >
          <div className={" col-10 col-md-5 col-lg-4 "}>
            <div
              className={`${styles.image_container}`}
              onClick={() => router.push("/")}
            >
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                src={"/images/Final_logo3_png.png"}
                alt={"logo"}
                priority
              />
              {/* {Cookies.get("MIgdir") === "true" ? (
                <Image
                  layout="fill"
                  objectFit="contain"
                  objectPosition={"center"}
                  src={"/images/Ar_Logo.svg"}
                  alt={"logo"}
                  priority
                />
              ) : (
                <Image
                  layout="fill"
                  objectFit="contain"
                  objectPosition={"center"}
                  src={"/images/EN_logo2.svg"}
                  alt={"logo"}
                  priority
                />
              )} */}
            </div>
          </div>
          <div className="col-2  d-lg-none">
            <button
              aria-label="menu"
              name="menu"
              className={`${styles.menu_Btn} ${show && styles.BtnActive}`}
              onClick={() => {
                // setShow(!show);
                // overHeight(!state);
                setVisible(true);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          {/*  col-12 col-md-5 col-lg-4 */}
          <div className={" col-12 col-md-12 col-lg-4 "}>
            <div className={styles.Search}>
              <form
                className={styles.input_div}
                style={{
                  direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                }}
              >
                <button
                  name="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    // dispatch(getSearch(search));
                    // setToggleSearch(true);
                    // router.push(`/search/${search}`);
                  }}
                  className={`${
                    Cookies.get("MIgdir") === "false"
                      ? styles.RightBorder
                      : styles.LefrBorder
                  }`}
                  type="submit"
                  aria-label="submit"
                >
                  {" "}
                  <AiOutlineSearch />
                </button>
                <input
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    clearTimeout(typingTimer);
                  }}
                  // onKeyUp={() => {
                  //   // console.log(search);
                  //   clearTimeout(typingTimer);
                  //   typingTimer = setTimeout(doneTyping, doneTypingInterval);
                  // }}
                  type="search"
                  name="search"
                  placeholder={`${t("menu.search")}`}
                  id="search"
                />
              </form>
              <div className={styles.searchResult}>
                {search.length > 0 && SearchArr && toggelSearch && (
                  <ul>
                    {SerchResult}
                    <li>
                      <Link
                        href={`/search/${search.replace(
                          /\s/g,
                          "-"
                        )}/${Cookies.get("MIgLanSymbol")}`}
                        className={styles.ShowMore}
                        onClick={() => {
                          // const PathName = ele.title.replace(/\s/g, "-");
                          setToggleSearch(false);
                        }}
                      >
                        <p>{t("menu.show_more")}</p>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-2 d-none d-lg-block">
            <div className={styles.iconsSec}>
              <a
                // aria-label={ele.name}
                href={"https://www.instagram.com/"}
                target="_blank"
              >
                <span className={`icon-instagram`}></span>
              </a>
              <a
                // aria-label={ele.name}
                href={"https://www.youtube.com/"}
                target="_blank"
              >
                <span className={`icon-youtube-play`}></span>
              </a>
              <a
                // aria-label={ele.name}
                href={"https://www.twitter.com/"}
                target="_blank"
              >
                <span className={`icon-twitter`}></span>
              </a>
              <a
                // aria-label={ele.name}
                href={"https://www.linkedin.com/"}
                target="_blank"
              >
                <span className={`icon-linkedin`}></span>
              </a>
              <a
                // aria-label={ele.name}
                href={"https://www.facebook.com/"}
                target="_blank"
              >
                <span className={`icon-facebook`}></span>
              </a>
              {/* {SocialArr &&
                SocialArr.map((ele) => {
                  return (
                    <a
                      aria-label={ele.name}
                      href={ele.link}
                      key={ele.name}
                      target="_blank"
                    >
                      <span className={`${ele.icon}`}></span>
                    </a>
                  );
                })} */}
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.HrLine} />

      <div className="container-xxl">
        <div
          className={`row ${styles.center}`}
          style={{
            flexDirection:
              Cookies.get("MIgdir") === "true" ? "row-reverse" : "row",
          }}
        >
          <div className={`col-md-12 col-lg-10 ${styles.menu} `}>
            <div
              className={`${styles.NavLinks} ${
                Cookies.get("MIgdir") === "true"
                  ? styles.AR_Font
                  : styles.EN_Font
              } ${show && styles.menuActive}`}
            >
              <div
                className={`text-center ${styles.NavLinksOne}`}
                style={{
                  flexDirection:
                    Cookies.get("MIgdir") === "true" ? "row-reverse" : "row",
                }}
              >
                {MenuArr &&
                  MenuArr.map((ele) => {
                    return (
                      <Link
                        key={ele.name}
                        onClick={() => {
                          setShow(false);
                          overHeight(false);
                        }}
                        style={{
                          direction:
                            Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                        }}
                        title={ele.name}
                        href={`${
                          ele?.sub_categories.length > 0
                            ? `/maincategory/${ele.name.replace(/\s/g, "-")}/${
                                ele.id
                              }/${Cookies.get("MIgLanSymbol")}`
                            : `/category/${ele.id}/${Cookies.get(
                                "MIgLanSymbol"
                              )}`
                        }`}
                        className={styles.link}
                      >
                        {ele.name}
                        {ele?.sub_categories.length > 0 && (
                          <IoMdArrowDropdown />
                        )}
                        {ele?.sub_categories.length > 0 && (
                          <div className={styles.nestedLinks}>
                            {ele.sub_categories.map((e) => {
                              return (
                                <Link
                                  key={e.name}
                                  onClick={() => {
                                    setShow(false);
                                    overHeight(false);
                                  }}
                                  title={e.name}
                                  // href={"/about"}
                                  href={`/category/${e.id}/${Cookies.get(
                                    "MIgLanSymbol"
                                  )}`}
                                  className={styles.link}
                                >
                                  {e.name}
                                  {/* {e?.sub_categories && <IoMdArrowDropdown />} */}
                                  {/* {e?.sub_categories && (
                                    <div className={styles.nestedLinks}>
                                      {e.sub_categories.map((el) => {
                                        return (
                                          <Link
                                            key={el.name}
                                            onClick={() => {
                                              setShow(false);
                                              overHeight(false);
                                            }}
                                            title={el.name}
                                            // href={"/about"}
                                            href={`/category/${
                                              el.slug
                                            }/${Cookies.get("MIgLanSymbol")}`}
                                            className={styles.link}
                                          >
                                            {el.name}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  )} */}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </Link>
                    );
                  })}

                <Link
                  onClick={() => {
                    setShow(false);
                    overHeight(false);
                  }}
                  title={"about"}
                  href={`/about/${Cookies.get("MIgLanSymbol")}`}
                  className={styles.link}
                  style={{
                    direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                  }}
                >
                  {t("menu.about.about")}

                  {/* About */}
                  <IoMdArrowDropdown />
                  <div className={styles.nestedLinks}>
                    <Link
                      onClick={() => {
                        setShow(false);
                        overHeight(false);
                      }}
                      title={"about mig"}
                      href={`/about/${Cookies.get("MIgLanSymbol")}`}
                      className={styles.link}
                    >
                      {t("menu.about.about_mig")}
                    </Link>

                    <Link
                      onClick={() => {
                        setShow(false);
                        overHeight(false);
                      }}
                      title={"contact"}
                      href={`/contact/${Cookies.get("MIgLanSymbol")}`}
                      className={styles.link}
                    >
                      {t("menu.about.contact")}
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-2  d-none d-lg-block">
            {LangaugeArr && (
              <div className={styles.LngSec}>
                {!Cookies.get("MIgLanSymbol")
                  ? LangaugeArr.slice(1).map((ele) => {
                      return (
                        <button
                          onClick={() => {
                            if (ele.symbol === "Ar") {
                              i18n.changeLanguage(ele.symbol);
                              // .catch((err) => {
                              //   console.log(err);
                              // });
                              dispatch(ShowLoading());
                              Cookies.set("MIgdir", `${ele.rtl}`);
                              Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                              router.push("/").then(() => {
                                // router.replace(router.asPath);
                                window.location.reload(false);
                              });
                              // .catch((err) => {
                              //   console.log(err);
                              // });
                            } else {
                              setDialogVisible(true);
                              startTimer();
                            }
                          }}
                          key={ele.symbol}
                        >
                          {ele.symbol}
                          <span>|</span>{" "}
                          <Image
                            width={30}
                            height={30}
                            src={`${process.env.customKey}/${ele.imageURL}`}
                            alt={"Ar"}
                          />
                        </button>
                      );
                    })
                  : LangaugeArr.filter(
                      (ele) => ele.symbol !== Cookies.get("MIgLanSymbol")
                    ).map((ele) => {
                      return (
                        <button
                          onClick={() => {
                            if (ele.symbol === "Ar") {
                              i18n.changeLanguage(ele.symbol);
                              dispatch(ShowLoading());
                              Cookies.set("MIgdir", `${ele.rtl}`);
                              Cookies.set("MIgLanSymbol", `${ele.symbol}`);
                              router.push("/").then(() => {
                                // router.replace(router.asPath);
                                window.location.reload(false);
                              });
                              // .catch((err) => {
                              //   console.log(err);
                              // });
                            } else {
                              setDialogVisible(true);
                              startTimer();
                            }
                          }}
                          key={ele.symbol}
                        >
                          {ele.symbol}
                          <span>|</span>{" "}
                          <Image
                            width={30}
                            height={30}
                            src={`${process.env.customKey}/${ele.imageURL}`}
                            alt={"Ar"}
                          />
                        </button>
                      );
                    })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
