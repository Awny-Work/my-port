// import Project from "../Projects/Project";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
const Project = dynamic(() => import("../Projects/Project"), {
  ssr: false,
  loading: () => "Loading...",
});
const Training = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title"> {t("train")}</h2>

      <div className="row">
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/pharmacy2.webp"}
          name={"pharmacy arab"}
          type={"train"}
          link={"https://pharmacy-arab.vercel.app"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/onlineStore2.webp"}
          name={"relax store"}
          type={"train"}
          link={"https://relax-store.vercel.app"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/hand.webp"}
          name={"handmade"}
          type={"train"}
          link={"https://handmade-app.vercel.app"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/rest.webp"}
          name={"resurant Menu"}
          type={"train"}
          link={"https://resturant--menu.vercel.app"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/company.webp"}
          name={"Company portfolio"}
          type={"train"}
          link={"https://awny277.github.io/Company"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/corner.webp"}
          name={"Corner Store"}
          type={"train"}
          link={"https://awny277.github.io/Corner-Store"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/kasper.webp"}
          name={"kasper"}
          type={"train"}
          link={"https://awny277.github.io/Kasper"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/leon.webp"}
          name={"leon"}
          type={"train"}
          link={"https://awny277.github.io/Leon"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/mahllaDoctor.webp"}
          name={"Mahlla Doctor"}
          type={"train"}
          link={"https://elmahalla-doctors.vercel.app"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/EliteCrop.webp"}
          name={"EliteCrop"}
          type={"train"}
          link={"https://awny277.github.io/EliteCrop"}
        />
        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/onlineStore1.webp"}
          name={"SHOPIQ"}
          type={"train"}
          link={"https://awny277.github.io/SHOPIQ"}
        />

        <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/moon.webp"}
          name={"moon Landing"}
          type={"train"}
          link={"https://awny277.github.io/Moon"}
        />
      </div>
    </div>
  );
};

export default Training;
