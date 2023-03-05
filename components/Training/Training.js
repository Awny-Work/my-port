// import Project from "../Projects/Project";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/ProjectSlice";
const Project = dynamic(() => import("../Projects/Project"), {
  ssr: false,
  loading: () => "Loading...",
});
const Training = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { Projects } = useSelector((state) => state.ProjectSlice);
  const dbInstance = collection(db, "projects");
  // const [DataState, setData] = useState([]);
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
      <h2 className="main-title"> {t("train")}</h2>
      <div className="row">
        {Projects.length > 0 &&
          [...Projects]
            .filter((ele) => ele.type === "Training Projects")
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
                  type={"train"}
                  fit={"cover"}
                  link={ele.link}
                  X={-50}
                  Y={0}
                />
              );
            })}
        {/* <Project
          fit="cover"
          xl={4}
          md={6}
          col={6}
          src={"/images/pharmacy2.webp"}
          name={"pharmacy arab"}
          type={"train"}
          link={"https://pharmacy-arab.vercel.app"}
        /> */}
        {/* <Project
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
        /> */}
      </div>
    </div>
  );
};

export default Training;
