import Project from "@/components/Projects/Project";
import { useTranslation } from "react-i18next";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/ProjectSlice";
const Landing = () => {
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
      <h2 className="main-title"> {t("land")}</h2>
      <div className="row">
        {Projects.length > 0 &&
          [...Projects]
            .filter((ele) => ele.type === "Landing Pages ")
            .sort(
              (a, b) =>
                parseFloat(a.num).toFixed(0) - parseFloat(b.num).toFixed(0)
            )
            .map((ele) => {
              return (
                <Project
                  key={ele.id}
                  col={6}
                  md={6}
                  xl={4}
                  src={ele.ImgURl}
                  name={ele.name}
                  type={"landing"}
                  fit={"cover"}
                  link={ele.link}
                  X={-50}
                  Y={0}
                />
              );
            })}
        {/* <Project
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
        /> */}
      </div>
    </div>
  );
};

export default Landing;
