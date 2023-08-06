import { useEffect, useState } from "react";
import Image from "next/legacy/image";
import styles from "@/styles/layout/Nav.module.css";

const Logo = ({ w, h }) => {
  const [activeTheme, setActiveTheme] = useState(
    document.body.dataset.theme == "light" ? "dark" : "light"
  );
  // const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  useEffect(() => {
    // window.localStorage.setItem("ATWThem", activeTheme);

    const listenStorageChange = () => {
      setActiveTheme(window.localStorage.getItem("ATWThem"));
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, [activeTheme]);
  return (
    <div className={styles.imageCont}>
      {activeTheme === "dark" ? (
        <Image src={"/logo.png"} alt={"logo"} width={w} height={h} priority />
      ) : (
        <Image
          src={"/darklogo.png"}
          alt={"logo"}
          width={w}
          height={h}
          priority
        />
      )}
    </div>
  );
};

export default Logo;
