import AddProjects from "@/components/Admin/AddProjects/AddProjects";
import SideNav from "@/components/Admin/layout/SideNav";
import dynamic from "next/dynamic";

// import ProjecTabels from "@/components/Admin/Tabels/ProjectsTabels";
const ProjecTabels = dynamic(
  () => import("@/components/Admin/Tabels/ProjectsTabels"),
  {
    ssr: false,
    // loading: () => "Landing...",
  }
);
const CompletedProjects = () => {
  // Upload Images

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SideNav />
        </div>
        <div className="col-md-9">
          <h1 className="main-title">Projects</h1>
          <AddProjects />
          <ProjecTabels path={"Projects"} />
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
