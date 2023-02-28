import Head from "next/head";
import "@/components/Data/i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
// import "primeicons/primeicons.css";
import dynamic from "next/dynamic";

// import NavBar from "@/components/layout/NavBar/NavBar";
import "@/styles/globals.css";
import "@/styles/style.css";
import Footer from "@/components/layout/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/layout/SocialMedia/SocialMedia";
// import Lang from "@/components/layout/LangDiv/Lang";
const NavBar = dynamic(() => import("@/components/layout/NavBar/NavBar"), {
  ssr: false,
});
const Lang = dynamic(() => import("@/components/layout/LangDiv/Lang"), {
  ssr: false,
});

function App({ Component, pageProps, canonical, Path }) {
  const [lang, setLang] = useState("");
  const { i18n } = useTranslation();
  useEffect(() => {
    // window.localStorage.setItem("lan", "en");

    const lan = window.localStorage.getItem("lan");
    if (!lan) {
      window.localStorage.setItem("lan", "en");
      i18n.changeLanguage("en");
      setLang("en");
    } else {
      // window.localStorage.setItem("lan", "en");

      i18n.changeLanguage(lan);
      setLang(lan);
    }
  }, [i18n, lang.length]);

  // const changEN = () => {
  //   i18n.changeLanguage("ar");
  // };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.placename" content="Egypt" />
        <meta
          name="geo.position"
          content="30.964816662156675, 31.16239846536351"
        />
        <meta name="geo.region" content="egypt" />
        <meta name="ICBM" content="30.964816662156675, 31.16239846536351" />
        <meta name="author" content=" Abdelrahman Tarek Awny" />
        {/* <meta name="robots" content="index,follow" /> */}
        <meta
          name="keywords"
          content=" Qualifications, Company , Upwork , Skills , Abdelrahman , Mahalla , Kubra ,Egypt  مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  "
        />

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        {/* <link
          href="https://plus.google.com/107145100779631826770"
          rel="publisher"
        /> */}

        <meta property="og:locale" content="ar_AR" />
        <meta property="og:type" content="website" />

        <meta
          property="og:site_name"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  "
        />
        <meta property="og:url" rel="canonical" content={canonical} />
        <link rel="canonical" href={canonical} />
        {/* <link rel="canonical" href={"https://awny-port-awny277.vercel.app"} /> */}

        {/* <meta property="fb:app_id" content="156283204469041" /> */}
        <meta name="twitter:site" content="@Abdelrahman2486" />
        <meta name="twitter:domain" content="Abdelrahman2486" />
        <meta name="twitter:creator" content="@Abdelrahman2486" />
        <title> عبدالرحمن طارق | Abdelrahman Tarek</title>
        <meta
          name="description"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  "
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="عبدالرحمن طارق | Abdelrahman Tarek" />
        <meta
          itemProp="description"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  
"
        />
        <meta itemProp="image" content="/ogImage.webp" />

        {/* <!-- Facebook Meta Tags --/> */}
        <meta
          property="og:url"
          content="https://awny-port-awny277.vercel.app"
        />
        <meta
          property="og:title"
          content="عبدالرحمن طارق | Abdelrahman Tarek"
        />
        <meta
          property="og:description"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  
"
        />
        <meta property="og:image" itemProp="image" content="/ogImage.webp" />

        {/* <!-- Twitter Meta Tags --/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="عبدالرحمن طارق | Abdelrahman Tarek"
        />
        <meta
          name="twitter:description"
          content="   مجتمع عبدالرحمن طارق لتصميم و تطوير المواقع و مساعدة الشركات في تنفيذ متطلباتهم  
"
        />
        <meta name="twitter:image" content="/ogImage.webp" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>
      <Lang>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
        <SocialMedia to={Path} />
      </Lang>
    </>
  );
}

App.getInitialProps = ({ ctx }) => {
  // const isProd = process.env.NODE_ENV === "production";
  const base = "https://awny-community.netlify.app";
  const { asPath } = ctx;
  const canonical = base + asPath;
  // console.log(canonical)
  return {
    canonical,
    Path: asPath,
  };
};

export default App;
