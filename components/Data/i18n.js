import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEN from "@/components/Data/Locale/En.json";
import dataAR from "@/components/Data/Locale/Ar.json";
import dataGR from "@/components/Data/Locale/Gr.json";
import dataFR from "@/components/Data/Locale/Fr.json";
const resources = {
  En: {
    translation: dataEN,
  },
  Ar: {
    translation: dataAR,
  },
  Fr: {
    translation: dataFR,
  },
  Gr: {
    translation: dataGR,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "Ar",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
