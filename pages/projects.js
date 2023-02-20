// import Projects from "@/components/Projects/MainProjects";

// import Landing from "@/components/Home/Landing/Landing";
// import WebApplication from "@/components/Home/WebApplication/WebApplication";
// import MainProjects from "@/components/Projects/MainProjects";
// import Training from "@/components/Training/Training";
import { DeferredContent } from "primereact/deferredcontent";
import dynamic from "next/dynamic";

const Landing = dynamic(() => import("@/components/Home/Landing/Landing"), {
  ssr: false,
  loading: () => "Header...",
});
const WebApplication = dynamic(
  () => import("@/components/Home/WebApplication/WebApplication"),
  {
    ssr: false,
    loading: () => "Header...",
  }
);
const MainProjects = dynamic(
  () => import("@/components/Projects/MainProjects"),
  {
    ssr: false,
    loading: () => "Header...",
  }
);
const Training = dynamic(() => import("@/components/Training/Training"), {
  ssr: false,
  loading: () => "Header...",
});
const ProjectPage = () => {
  return (
    <>
      <div style={{ minHeight: "50vh" }} id={"Project"}>
        <DeferredContent>
          <MainProjects />
        </DeferredContent>
      </div>

      <div style={{ minHeight: "50vh" }} id={"Training"}>
        <DeferredContent>
          <Training />
        </DeferredContent>
      </div>

      <div style={{ minHeight: "50vh" }} id={"Training"}>
        <DeferredContent>
          <Landing />
        </DeferredContent>
      </div>

      <div style={{ minHeight: "50vh" }} id={"WebApp"}>
        <DeferredContent>
          <WebApplication />
        </DeferredContent>
      </div>
    </>
  );
};

export default ProjectPage;
