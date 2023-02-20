import Project from "@/components/Projects/Project";
import { useTranslation } from "react-i18next";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title"> {t("land")}</h2>
      <div className="row">
        <Project
          col={6}
          md={6}
          xl={4}
          src={"/images/landing/Illustration.webp"}
          name={"3D Illustration"}
          type={"landing"}
          fit={"contain"}
          link={"https://awny277.github.io/Illustration"}
        />
        <Project
          md={6}
          xl={4}
          fit={"contain"}
          col={6}
          src={"/images/landing/Urban.webp"}
          name={"Urban"}
          type={"landing"}
          link={"https://awny277.github.io/urban"}
        />
        <Project
          xl={4}
          md={6}
          col={6}
          fit={"contain"}
          src={"/images/landing/creative-studio.webp"}
          name={"creative studio"}
          type={"landing"}
          link={"https://awny277.github.io/creative-studio"}
        />

        <Project
          xl={4}
          md={6}
          fit="contain"
          col={6}
          src={"/images/molly2.webp"}
          name={"molly Landing"}
          type={"landing"}
          link={"https://awny277.github.io/Molly"}
        />
      </div>
    </div>
  );
};

export default Landing;
