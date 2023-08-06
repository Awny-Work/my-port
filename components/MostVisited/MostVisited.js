import Image from "next/legacy/image";
import styles from "@/styles/Home.module.css";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMostVisited } from "@/store/SubscribeSlice";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
const MostVisited = ({ most, latest, Lng }) => {
  const { MostTop } = useSelector((state) => state.SubscribSlice);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const router = useRouter();
  useEffect(() => {
    if (router.query.LangID !== undefined) {
      if (router.query.LangID === "Ar") {
        if (!MostTop) {
          dispatch(getMostVisited("Ar"));
        }
      } else if (router.query.LangID === "En") {
        if (!MostTop) {
          dispatch(getMostVisited("En"));
        }
      }

      // else {
      //   if (!MostTop) {
      //     dispatch(getMostVisited("Ar"));
      //   }
      // }
    } else {
      if (!MostTop) {
        dispatch(getMostVisited(Cookies.get("MIgLanSymbol")));
      }
    }
  }, [MostTop, dispatch, router.query.LangID, Lng]);
  return (
    <>
      <h2
        style={{
          textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
        }}
        className="main_title "
      >
        {t("menu.most_visited")}
      </h2>
      <div className={`row ${most}`}>
        {MostTop
          ? MostTop.map((ele) => {
              const PathName = ele.title.replace(/\s/g, "-");
              return (
                <Link
                  href={`/article/${PathName}/${ele.id}/${Cookies.get(
                    "MIgLanSymbol"
                  )}`}
                  className={`col-md-12 ${styles.latestCol}`}
                  key={ele.id}
                >
                  <div
                    className="latest"
                    style={{
                      direction:
                        Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
                    }}
                  >
                    <div
                      className="latestInfo"
                      style={{
                        textAlign:
                          Cookies.get("MIgdir") === "true" ? "right" : "left",
                      }}
                    >
                      <h3>{ele.title}</h3>
                      <p>{ele.sub_title}</p>
                      {ele?.authors.map((e) => {
                        return <h4 key={e.name}>{e.name}</h4>;
                      })}
                    </div>
                    <div className="imageCont imageLatestCont">
                      <Image
                        width={100}
                        height={100}
                        // src={ele.main_image}
                        src={`${process.env.customKey}/${ele.main_image}`}
                        alt="name"
                        layout={"fill"}
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default MostVisited;
