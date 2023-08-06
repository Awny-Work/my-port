// import Image from "next/legacy/image";
import Link from "next/link";
// import Cookies from "js-cookie";
// import styles from "@/styles/Contact.module.css";
// import Card from "@/components/layout/Card/Card";
// import Subscribe from "@/components/Home/Subscribe/Subscribe";
import axios from "axios";
// import MostVisited from "@/components/MostVisited/MostVisited";
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
const CategoryPagenation = ({ Articals, Meta, catId, Lang }) => {
  const { t } = useTranslation();
  return (
    <div
      className="container-xxl"
      style={{
        direction: Lang === "Ar" ? "rtl" : "ltr",
      }}
    >
      {Articals.length > 0 ? (
        <>
          <div
            className={`cramp ${Lang === "Ar" ? "CrampRight" : "CrampLeft"}`}
          >
            <Link href={"/"} className="frist">
              {t("menu.home")}
            </Link>
            <span>{`>`}</span>
            <Link href={"/"}>{Articals[0].category.name}</Link>
          </div>
          <div
            className="row justify-content-between"
            // style={{
            //   flexDirection: Lang === "Ar" ? "row-reverse" : "row",
            // }}
          >
            <div className="col-lg-9">
              <h2
                style={{
                  textAlign: Lang === "Ar" ? "right" : "left",
                }}
                className="main_title "
              >
                {Articals[0].category}
              </h2>

              <div className="row ">
                {Articals.map((ele) => {
                  return (
                    <div className="col-md-6 col-lg-4" key={ele.id}>
                      {" "}
                      <Card
                        id={ele.id}
                        main_image={ele.main_image}
                        title={ele.title}
                        sub_title={ele.sub_title}
                        writer={false}
                        type={"tiny"}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="MoreAtriclePagenation">
                {parseInt(Meta?.current_page) > 1 && (
                  <Link
                    href={`/category/page/${catId}/${
                      parseInt(Meta?.current_page) - 1
                    }/${Lang}`}
                  >
                    {parseInt(Meta?.current_page) - 1}
                  </Link>
                )}

                {Articals.length === 10 && (
                  <>
                    <Link
                      href={`/category/page/${catId}/${parseInt(
                        Meta?.current_page
                      )}/${Lang}`}
                    >
                      {parseInt(Meta?.current_page)}
                    </Link>
                  </>
                )}
                {Articals.length === 10 && (
                  <>
                    <Link
                      href={`/category/page/${catId}/${
                        parseInt(Meta?.current_page) + 1
                      }/${Lang}`}
                    >
                      {parseInt(Meta?.current_page) + 1}
                    </Link>
                  </>
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
        </>
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

export default CategoryPagenation;

export async function getServerSideProps({ params, res }) {
  // const Url = "https://news.etihaad-eg.com/api";
  const result = await axios
    .get(`${process.env.customKey}/category/${params.Cat_id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-localization": params.LangID,
      },
      params: {
        page: params.Page_id,
      },
    })
    .then((res) => res.data);
  return {
    props: {
      Articals: result.data,
      Meta: result.meta,
      catId: params.Cat_id,
      Lang: params.Page_id,
    },
  };
}
