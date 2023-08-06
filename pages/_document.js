import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

export default function Document() {
  // const [lang, setLang] = useState(null);
  // const { i18n } = useTranslation();
  // useEffect(() => {
  //   const lang = window.localStorage.getItem("lan");
  //   if (!lang) {
  //     setLang(window.localStorage.getItem("lan"));
  //     window.localStorage.setItem("lan", "ar");
  //     i18n.changeLanguage("en");
  //   } else {
  //     i18n.changeLanguage(lang);
  //     setLang(window.localStorage.getItem("lan"));
  //   }
  // }, [i18n]);
  // console.log(lang);
  // const lang =
  //   typeof window !== "undefined" && window.localStorage.getItem("lan");
  // const Theme = document
  // const [lang, setLang] = useState("light");

  // useEffect(() => {
  //   const lan = window.localStorage.getItem("ATWThem");
  //   if (!lan) {
  //     window.localStorage.setItem("ATWThem", "light");
  //   }
  // }, []);
  // const [theme, setTheme] =useState("light")
  // useEffect(() => {
  //   const lan = window.localStorage.getItem("ATWThem");
  //   if (!lan) {
  //     window.localStorage.setItem("ATWThem", "light");
  //     setTheme("light")
  //   }
  // }, []);
  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('ATWThem')) {
      return window.localStorage.getItem('ATWThem')
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? 'dark' 
      : 'light'
  }
  document.body.dataset.theme = getUserPreference();
`;
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel=" preload stylesheet"
          crossOrigin="anonymous"
        />

        {/* <meta name="google-site-verification" content="z8SQIlLVHeSqEdGshP9L6qmzt8dA3msmUNvoryZ6st4" /> */}
        <meta
          name="google-site-verification"
          content="GvNmYO7tgo7afOiOGzFFMB5RUyqaBT3ZQGF82KR2tdI"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
