import Image from "next/legacy/image";
import Link from "next/link";
import axios from "axios";
import styles from "@/styles/Article.module.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { useRouter } from "next/router";
import { BsWhatsapp } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import Head from "next/head";
import dynamic from "next/dynamic";
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

const Article = ({ Artical, Lang }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const Links = process.env.webDomain + router.asPath;

  const event = new Date(Artical?.date);
  const options = {
    // weekday: "long",
    // year: "numeric",
    month: "long",
    // day: "numeric",
  };

  const ENDay = {
    day: "numeric",
  };
  return (
    <>
      <Head>
        <title>{Artical.title}</title>

        <meta name="description" content={Artical.sub_title.slice(0, 160)} />

        <meta itemProp="name" content={Artical.title} />
        <meta
          itemProp="description"
          content={Artical.sub_title.slice(0, 160)}
        />
        <meta itemProp="image" content={`${Artical.main_image}`} />

        <meta property="og:type" content="Article" />
        <meta property="og:title" content={Artical.title} />
        <meta
          property="og:description"
          content={Artical.sub_title.slice(0, 160)}
        />
        <meta property="og:image" content={`${Artical.main_image}}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={Artical.title} />
        <meta
          name="twitter:description"
          content={Artical.sub_title.slice(0, 160)}
        />
        <meta name="twitter:image" content={`${Artical.main_image}`} />

        <script type="application/ld+json" key="structured-data">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${Artical.title}`,
            alternativeHeadline: `${Artical.title}`,
            image: `${Artical.main_image}}`,
            author: `${Artical?.authors[0]?.name}`,
            award: "Best article ever written",
            editor: "MIG",
            genre: "search engine optimization",
            keywords: `${[...Artical.tags]}`,
            wordcount: `${Artical.description.length}`,
            publisher: {
              "@type": "Organization",
              name: "Google",
              logo: {
                "@type": "ImageObject",
                url: "/images/MIG.png",
              },
            },
            url: `${process.env.webDomain}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": Links,
            },
            datePublished: `${Artical.updated}`,
            dateCreated: `${Artical.updated}`,
            dateModified: `${Artical.updated}`,
            deScription: `${Artical.sub_title.slice(0, 160)}`,
            articleBody: `${Artical.sub_title}`,
          })}
        </script>
      </Head>
      <div className="container-xxl">
        <div className={`cramp ${Lang === "Ar" ? "CrampRight" : "CrampLeft"}`}>
          <Link href={"/"} className="frist">
            {t("menu.home")}
          </Link>

          <>
            <span>{`>`}</span>
            <Link href={`/category/${Artical?.category.id}/${Lang}`}>
              {Artical?.category.name}
            </Link>
          </>

          {Artical?.category.sub_category && (
            <>
              <span>{`>`}</span>
              <Link
                href={`/category/${Artical.category.sub_category.id}/${Lang}`}
              >
                {Artical.category.sub_category.name}
              </Link>
            </>
          )}

          <span>{`>`}</span>
          <Link
            href={`/article/${Artical.title.replace(/\s/g, "-")}/${
              Artical.id
            }/${Lang}`}
          >
            {Artical.title}
          </Link>
        </div>
        <div
          className={`row justify-content-between ${
            Lang === "Ar" ? "RightDir" : "LeftDir"
          }`}
        >
          <div className="col-lg-12">
            <div className={"MainImage_cont"}>
              {Artical.main_image && (
                <Image
                  // src={Artical.main_image}
                  src={`${process.env.customKey}/${Artical.main_image}`}
                  alt={Artical.title}
                  layout="fill"
                  // objectFit="fill"
                  objectFit={"cover"}
                  objectPosition={"center"}
                />
              )}
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className={styles.InfoCard}>
                  <div className={styles.card_right}>
                    <div
                      className={styles.info}
                      style={{
                        textAlign: Lang === "Ar" ? "right" : "left",
                      }}
                    >
                      <h1>{Artical.title}</h1>
                      <h4>{Artical?.sub_title}</h4>
                    </div>

                    <div className={styles.AuthrContainer}>
                      {Artical &&
                        Artical.authors.map((ele) => {
                          return (
                            <div
                              className={styles.footer}
                              key={ele.name}
                              style={{
                                marginLeft: "5px",
                                marginRight: "5px",
                              }}
                            >
                              <div className={styles.imgfooter}>
                                <Image
                                  // width={32}
                                  // height={32}
                                  // src={ele.image}
                                  src={`${process.env.customKey}/${
                                    ele.main_image
                                      ? ele.main_image
                                      : "/images/authors/author-1690712622580.png"
                                  }`}
                                  layout="fill"
                                  objectFit="contain"
                                  objectPosition={"center"}
                                  alt="person"
                                />
                              </div>
                              <p>{ele.name} </p> -
                            </div>
                          );
                        })}
                      <span>
                        {Lang === "Ar" ? (
                          <>
                            {event.toLocaleDateString("en-US", ENDay)}{" "}
                            {event.toLocaleDateString("ar-EG", options)}{" "}
                            {event.getFullYear()}
                          </>
                        ) : (
                          Artical?.date
                        )}
                      </span>
                    </div>
                  </div>
                  <div className={styles.read_Btn}>
                    {/* Artical?.media_type === "mp4" */}
                    {Artical?.media_type !== "video" && Artical?.media && (
                      <button
                        onClick={() => {
                          window.open(
                            `${process.env.customKey}/${Artical.media}`
                          );
                        }}
                      >
                        <div className={styles.iconCont}>
                          <Image
                            src={"/images/read.png"}
                            alt="read"
                            width={18}
                            height={20}
                          />
                        </div>
                        <p>Read as PDF</p>
                      </button>
                    )}

                    <a
                      style={{
                        // direction: Lang === "Ar" ? "ltr" : "rtl",
                        direction: "ltr",
                      }}
                      href="https://chat.whatsapp.com/JynV28OxvR44QaLdyHIGAr"
                      target="_blank"
                      aria-label="Whats App Group"
                    >
                      {/* Receive Articles  */}
                      {t("menu.whaths_app")}
                      <BsWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
                <div className={styles.IconsContent}>
                  <div className={styles.iconsSec}>
                    <FacebookShareButton url={Links} quote={"Facebook"}>
                      <span className="icon-facebook"></span>
                    </FacebookShareButton>
                    <TwitterShareButton url={Links} quote={"Twitter"}>
                      <span className="icon-twitter"></span>
                    </TwitterShareButton>
                    <LinkedinShareButton url={Links} quote={"Twitter"}>
                      <span className="icon-linkedin"></span>
                    </LinkedinShareButton>
                    <TelegramShareButton url={Links} quote={"Twitter"}>
                      <span className="icon-telegram"></span>
                    </TelegramShareButton>
                    <WhatsappShareButton url={Links} quote={"Twitter"}>
                      <span className="icon-whatsapp"></span>
                    </WhatsappShareButton>
                  </div>

                  <div className={styles.read_Btn}>
                    {Artical?.media && Artical?.media_type !== "video" && (
                      <button
                        onClick={() => {
                          window.open(
                            `${process.env.customKey}/${Artical.media}`
                          );
                        }}
                      >
                        <div className={styles.iconCont}>
                          <Image
                            src={"/images/read.png"}
                            alt="read"
                            width={18}
                            height={20}
                          />
                        </div>
                        <p>Read as PDF</p>
                      </button>
                    )}

                    <a
                      aria-label="our android application"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/qr/FK44A3JX6KZKC1"
                    >
                      {/* <BsWhatsapp /> */}
                      {t("menu.whaths_app")}
                      <BsWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-11">
                <div className={"row"}>
                  <div
                    className="article_body"
                    id={"artContent"}
                    dangerouslySetInnerHTML={{ __html: Artical?.description }}
                  ></div>
                  {Artical?.media_type === "video" && Artical?.media && (
                    <div className="col-12">
                      <video controls className={styles.Video}>
                        <source
                          src={`${process.env.customKey}/${Artical.media}`}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  )}
                </div>
              </div>
              {Artical?.resources.length > 0 && (
                <div
                  className={`col-lg-12 ${styles.latestCol}
              
                `}
                >
                  <h2
                    style={{
                      textAlign: Lang === "Ar" ? "right" : "left",
                    }}
                    className="main_title medium_title"
                  >
                    {t("menu.resources")}
                  </h2>

                  <div className={styles.Resources}>
                    {Artical.resources.map((ele) => {
                      return (
                        <a href={ele.name} key={ele.id}>
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`col-lg-3 ${styles.SubScribeSection}`}>
            <Subscribe type={"about_shadow"} />
            <MostVisited most={"Most_view"} latest={"latest"} Lng={Lang} />
            {Artical?.tags.length > 0 && (
              <div className="row Most_view">
                <div className={`col-lg-12 ${styles.latestCol}`}>
                  <h2
                    style={{
                      textAlign: Lang === "Ar" ? "right" : "left",
                    }}
                    className="main_title medium_title"
                  >
                    {t("menu.tags")}
                  </h2>
                  <div className={styles.Tags}>
                    {Artical.tags.map((ele) => {
                      return (
                        <Link href={`/tags/${ele.id}/${Lang}`} key={ele.id}>
                          {ele.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;

export async function getServerSideProps({ params, res }) {
  // const Url = "https://news.etihaad-eg.com/api";
  const result = await axios
    .get(`${process.env.customKey}/article/${params.articleId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-localization": params.LangID,
      },
    })
    .then((res) => res.data);
  return {
    props: {
      Artical: result,
      Lang: params.LangID,
    },
  };
}
