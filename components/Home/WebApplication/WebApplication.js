import Project from "@/components/Projects/Project";
import { useTranslation } from "react-i18next";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/ProjectSlice";
const WebApplication = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { Projects } = useSelector((state) => state.ProjectSlice);
  const dbInstance = collection(db, "projects");

  const GetNotes = useCallback(() => {
    getDocs(dbInstance).then((data) => {
      dispatch(
        GetProjects(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        )
      );
    });
  }, [dbInstance, dispatch]);

  useEffect(() => {
    if (Projects.length <= 0) {
      GetNotes();
    }
  }, [Projects, GetNotes]);
  return (
    <div className="container">
      <h2 className="main-title"> {t("webApp")}</h2>
      <div className="row">
        {Projects.length > 0 &&
          [...Projects]
            .filter((ele) => ele.type === "Web Application")
            .sort(
              (a, b) =>
                parseFloat(a.num).toFixed(0) - parseFloat(b.num).toFixed(0)
            )
            .map((ele) => {
              return (
                <Project
                  key={ele.id}
                  col={6}
                  src={ele.ImgURl}
                  name={ele.name}
                  type={"Live"}
                  fit={"cover"}
                  link={ele.link}
                  X={-50}
                  Y={0}
                />
              );
            })}
        {/* <Project
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
        /> */}
      </div>
    </div>
  );
};

export default WebApplication;
