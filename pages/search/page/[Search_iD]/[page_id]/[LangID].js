// import Image from "next/legacy/image";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import styles from "@/styles/Contact.module.css";
// import Card from "@/components/layout/Card/Card";
// import Subscribe from "@/components/Home/Subscribe/Subscribe";
import axios from "axios";
// import MostVisited from "@/components/MostVisited/MostVisited";
import Link from "next/link";
import Image from "next/legacy/image";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
const MostVisited = dynamic(
  () => import("@/components/MostVisited/MostVisited"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const Card = dynamic(() => import("@/components/layout/Card/Card"), {
  loading: () => <p></p>,
  ssr: false,
});
const Subscribe = dynamic(
  () => import("@/components/Home/Subscribe/Subscribe"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const SearchPagenation = ({ Articals, searchCode, Meta, Lang }) => {
  const { t } = useTranslation();

  return (
    <div
      className="container-xxl"
      style={{
        direction: Lang === "Ar" ? "rtl" : "ltr",
      }}
    >
      <div className="cramp">
        {/* <Link href={"/"} className="frist">
            {t("menu.home")}
        </Link>
        <span>{`>`}</span>
        <Link href={"/"}>{Articals.category.name}</Link> */}
      </div>
      {Articals && Articals.data.length > 0 ? (
        <div className="row justify-content-between">
          <div className="col-lg-9">
            <h2
              style={{
                textAlign: Lang === "Ar" ? "right" : "left",
              }}
              className="main_title "
            >
              {Articals.data[0]?.title}
            </h2>

            <div className="row">
              {Articals.data.map((ele) => {
                return (
                  <div className="col-md-6 col-lg-4" key={ele.id}>
                    {" "}
                    <Card
                      {...ele}
                      writer={false}
                      type={"tiny"}
                      // image={"/images/1.png"}
                      person={"/images/person.png"}
                    />
                  </div>
                );
              })}
            </div>
            <div className="MoreAtriclePagenation">
              {parseInt(Meta?.current_page) > 1 && (
                <Link
                  href={`/search/page/${searchCode}/${
                    parseInt(Meta?.current_page) - 1
                  }/${Lang}`}
                >
                  {parseInt(Meta?.current_page) - 1}
                </Link>
              )}

              {Articals.data.length === 10 && (
                <Link
                  className="active_link"
                  href={`/search/page/${searchCode}/${parseInt(
                    Meta?.current_page
                  )}/${Lang}`}
                >
                  {parseInt(Meta?.current_page)}
                </Link>
              )}
              {Articals.data.length === 10 && (
                <Link
                  href={`/search/page/${searchCode}/${
                    parseInt(Meta?.current_page) + 1
                  }/${Lang}`}
                >
                  {parseInt(Meta?.current_page) + 1}
                </Link>
              )}
            </div>
          </div>
          <div className="col-lg-3">
            {/* <div className="row Most_view">
            </div> */}
            <MostVisited most={"Most_view"} />
            <Subscribe type={"about_shadow"} />
          </div>
        </div>
      ) : (
        <div className="NotFound">
          <div className="Image_notFound">
            <Image
              src={"/images/EN_logo.svg"}
              layout="fill"
              objectFit="contain"
              objectPosition={"center"}
              alt="Not found"
            />
          </div>
          <h1> {t("menu.not_fund")} </h1>
        </div>
      )}
    </div>
  );
};

export default SearchPagenation;

export async function getServerSideProps({ params, res }) {
  // const Url = "https://news.etihaad-eg.com/api";
  const result = await axios
    .get(`${process.env.customKey}/filter`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-localization": params.LangID,
      },
      params: {
        search: params.Search_iD,
        page: params.page_id,
      },
    })
    .then((res) => res.data);
  return {
    props: {
      Articals: result,
      searchCode: params.Search_iD,
      Meta: result.meta,
      Lang: params.LangID,
    },
  };
}
