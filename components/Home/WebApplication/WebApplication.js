import Project from "@/components/Projects/Project";
import { useTranslation } from "react-i18next";
const WebApplication = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="main-title"> {t("webApp")}</h2>
      <div className="row">
        <Project
          fit="cover"
          col={6}
          src={"/images/landing/ramadan.webp"}
          name={"Ramadan"}
          type={"Live"}
          link={"https://awny277.github.io/Ramadan"}
        />
        <Project
          fit="cover"
          col={6}
          src={"/images/NoteApp.webp"}
          name={"Note App"}
          type={"Live"}
          link={"https://react-app-note.vercel.app"}
        />
      </div>
    </div>
  );
};

export default WebApplication;
