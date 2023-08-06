import styles from "@/styles/Home.module.css";
import { DeferredContent } from "primereact/deferredcontent";
import dynamic from "next/dynamic";
import Study from "@/components/Home/Study/Study";
// import ToogleTheme from "@/components/layout/ToogleTheme/ToogleTheme";

// const ToogleTheme = dynamic(
//   () => import("@/components/layout/ToogleTheme/ToogleTheme"),
//   {
//     ssr: false,
//     // loading: () => "Header...",
//   }
// );
import Header from "@/components/Home/Header/Header";
import Services from "@/components/Home/Services/Services";
import Certification from "@/components/Home/Certification/Certification";
// const Header = dynamic(() => import("@/components/Home/Header/Header"), {
//   ssr: false,
//   // loading: () => "Header...",
// });
const Training = dynamic(() => import("@/components/Training/Training"), {
  ssr: false,
  // loading: () => "Training...",
});
const MainProjects = dynamic(
  () => import("@/components/Projects/MainProjects"),
  {
    ssr: false,
    // loading: () => "MainProjects...",
  }
);
const AboutMe = dynamic(() => import("@/components/About/AboutMe"), {
  ssr: false,
  loading: () => <></>,
});
const Skills = dynamic(() => import("@/components/Skills/Skills"), {
  ssr: false,

  loading: () => <></>,
});
const WebApplication = dynamic(
  () => import("@/components/Home/WebApplication/WebApplication"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const Qualifications = dynamic(
  () => import("@/components/Home/Qualifications/Qualifications"),
  {
    ssr: false,
    loading: () => <></>,
  }
);
const ContactSection = dynamic(
  () => import("@/components/ContactSection/ContactSection"),
  {
    ssr: false,
    loading: () => <></>,
  }
);

const Landing = dynamic(() => import("@/components/Home/Landing/Landing"), {
  ssr: false,
  loading: () => <></>,
});
// const Footer = dynamic(
//   () => import("@/components/layout/Footer/Footer"),
//   {
//     ssr: false,
//     loading: () => "Qualifications...",
//   }
// );

// import Footer from "@/components/layout/Footer/Footer";
// import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <main className={"main"}>
        <div style={{ minHeight: "90vh" }}>
          <Header />
        </div>
        <DeferredContent>
          <div style={{ minHeight: "500px" }}>
            <AboutMe />
          </div>
        </DeferredContent>

        <Services />
        <div style={{ minHeight: "500px" }} id={"Project"}>
          <DeferredContent>
            <MainProjects />
          </DeferredContent>
        </div>

        <DeferredContent>
          <div style={{ minHeight: "500px" }} id={"Training"}>
            <Training />
          </div>
        </DeferredContent>

        <div style={{ minHeight: "500px" }} id={"Training"}>
          <DeferredContent>
            <Landing />
          </DeferredContent>
        </div>

        <DeferredContent>
          <div style={{ minHeight: "500px" }} id={"WebApp"}>
            <WebApplication />
          </div>
        </DeferredContent>
        <div style={{ minHeight: "300px" }} id={"skills"}>
          <DeferredContent>
            <Skills />
          </DeferredContent>
        </div>

        <DeferredContent>
          <div style={{ minHeight: "200px" }}>
            <Study />
          </div>
        </DeferredContent>

        <div style={{ minHeight: "500px" }} id={"Qualifications"}>
          <DeferredContent>
            <Qualifications />
          </DeferredContent>
        </div>
        <Certification />

        <DeferredContent>
          <div style={{ minHeight: "500px" }} id={"Qualifications"}>
            <ContactSection />
          </div>
        </DeferredContent>
        {/* <div style={{ minHeight: "50vh" }} id={"Qualifications"}>
          <DeferredContent>
        
          </DeferredContent>
        </div> */}

        {/* <span className="icon-youtube"></span> */}

        {/* <p className={styles.testHello}>helllo</p> */}
      </main>
    </>
  );
}
