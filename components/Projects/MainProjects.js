// import Project from "./Project";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import Image from "next/legacy/image";
// import styles from "@/styles/Home/Project.module.css";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/ProjectSlice";
const Project = dynamic(() => import("./Project"), {
  ssr: false,
  // loading: () => "Loading...",
});
const MainProjects = () => {
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
  // const trans = {
  //   // delayChildren: 0.5,
  //   staggerChildren: 0.5,
  // };
  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.5
  //     }
  //   }
  // }
  // const item = {
  //   hidden: { opacity: 0, x: -50 },
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //     },
  //   },
  // };
  return (
    <div className="container">
      <h2 className="main-title"> {t("live")}</h2>
      <div className="row">
        {Projects.length > 0 &&
          [...Projects]
            .filter((ele) => ele.type === "Live Projects")
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
          fit={"cover"}
          col={6}
          src={"/images/live/Souq.webp"}
          name={"souq mahala "}
          type={"Live"}
          link={"https://souq-mahala.com"}
          X={50}
          Y={0}

        />
        <Project
          fit={"cover"}
          col={6}
          src={"/images/live/deltawy.webp"}
          name={"Deltawy Compaany"}
          type={"Live"}
          link={"https://deltawy.com"}
          X={-50}
          Y={0}

        />
        <Project
          fit="cover"
          col={6}
          src={"/images/live/dalell.webp"}
          name={"Mahalla and Delta guide"}
          type={"Live"}
          link={"https://deltawy.net"}
          X={50}
          Y={0}

        /> */}
      </div>
    </div>
  );
};

export default MainProjects;
