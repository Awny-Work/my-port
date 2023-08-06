import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useTranslation } from "react-i18next";
import "@/styles/fonts/stylesheet.css";
import "@/styles/style.css";
import "@/styles/globals.css";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import Router from "next/router";
const Navbar = dynamic(() => import("@/components/layout/Navbar/Navbar"), {
  loading: () => <p></p>,
  ssr: false,
});
const Footer = dynamic(() => import("@/components/layout/footer/Footer"), {
  loading: () => <p></p>,
  ssr: false,
});
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import store from "@/store/store";
import Head from "next/head";
// import LoadingScreen from "@/components/Home/LoadingScreen/LoadingScreen";
import LoadingWrap from "@/components/layout/LoadingWrap/LoadingWrap";
import "@/components/Data/i18n";
import Loading from "@/components/layout/Loading/Loading";

function App({ Component, pageProps, canonical }) {
  const [bodyHeight, setBodyHeight] = useState(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (!Cookies.get("MIgdir")) {
      Cookies.set("MIgdir", "true");
      i18n.changeLanguage("Ar");
    }
    if (!Cookies.get("MIgLanSymbol")) {
      Cookies.set("MIgLanSymbol", "Ar");
      i18n.changeLanguage("Ar");
    } else {
      i18n.changeLanguage(Cookies.get("MIgLanSymbol"));
    }
  }, [i18n]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <Head>
        <title>CDC</title>

        {/* <meta name="geo.placename" content="Egypt" />
        <meta name="geo.position" content="30.9685798;31.1664157" />
        <meta name="geo.region" content="egypt" />
        <meta name="ICBM" content="30.9685798, 31.1664157" />
        <meta name="author" content="MIG" /> */}
        {/* <meta name="robots" content="index,follow" /> */}
        <meta name="keywords" content="CDC" />
        <meta name="description" content="CDC Description" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:title" content="CDC" />
        <meta property="og:image" content="/images/CDC.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content=" CDC Description" />
        <meta property="og:site_name" content="CDC " />
        <meta property="og:url" rel="canonical" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Provider store={store}>
            <LoadingWrap>
              <div
                style={{ maxHeight: "25vh", minHeight: "140px" }}
                className="TopNav"
              >
                <Navbar
                  state={bodyHeight}
                  overHeight={(e) => setBodyHeight(e)}
                />
              </div>
              <div className=" margin_mobile">
                <Component {...pageProps} />
              </div>
              <Footer />
            </LoadingWrap>
          </Provider>
        </div>
      )}
    </>
  );
}

App.getInitialProps = ({ ctx }) => {
  // const isProd = process.env.NODE_ENV === "production";
  const base = "https://icdc-temp.com";
  const { asPath } = ctx;
  const canonical = base + asPath;
  // console.log(canonical)
  return {
    canonical,
  };
};

export default App;
