import Link from "next/link";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
// import Header from "@/components/Home/Header/Header";
// import CatrgorySlider from "@/components/layout/CategorySlider/CatrgorySlider";
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
const CatrgorySlider = dynamic(
  () => import("@/components/layout/CategorySlider/CatrgorySlider"),
  {
    loading: () => <p></p>,
    ssr: false,
  }
);
const MainCategory = ({ Articals, Lang, CatName }) => {
  const { t } = useTranslation();
  const Last =
    Articals && Articals.map((ele) => Array.prototype.concat(...ele.articles));
  const New =
    Last &&
    Array.prototype
      .concat(...Last)
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
  return (
    <div
      className="container-xxl"
      style={{
        direction: Lang === "Ar" ? "rtl" : "ltr",
      }}
    >
      {Articals.length > 0 ? (
        <>
          <div className="row justify-content-between">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-12">
                  <h1
                    // href={`/category/${ele.category.id}/${Lang}`}
                    style={{
                      textAlign: Lang === "Ar" ? "right" : "left",
                    }}
                    className="main_title "
                  >
                    {CatName.replace(/-/g, " ")}
                  </h1>

                  {New && (
                    <div
                      // style={{ maxHeight: "75vh" }}
                      className={" MarginSection "}
                    >
                      <CatrgorySlider Articles={New} />
                    </div>
                  )}
                </div>
                <div className="col-12">
                  {Articals.map((ele) => {
                    return (
                      <div key={ele.category.id}>
                        <Link
                          href={`/category/${ele.category.id}/${Lang}`}
                          style={{
                            textAlign: Lang === "Ar" ? "right" : "left",
                          }}
                          className="main_title "
                        >
                          {ele.category.name}
                        </Link>
                        <div className={"row"}>
                          {ele.articles.map((el) => {
                            return (
                              <div className="col-md-6 col-lg-4" key={el.id}>
                                <Card
                                  id={el.id}
                                  main_image={el.main_image}
                                  title={el.title}
                                  sub_title={el.sub_title}
                                  writer={false}
                                  type={"tiny"}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
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

export default MainCategory;

export async function getServerSideProps({ params, res }) {
  const result = await axios
    .get(`${process.env.customKey}/category/${params.CatID}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-localization": params.LangID,
      },
      params: {
        page: 1,
      },
    })
    .then((res) => res.data);
  return {
    props: {
      Articals: result,
      catId: params.CatID,
      Lang: params.LangID,
      CatName: params.name,
    },
  };
}
