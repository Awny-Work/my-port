import React, { useEffect, useState } from "react";
// import { BsTelephoneFill } from "react-icons/bs";
// import { SiMessenger } from "react-icons/si";
// import { IoLogoWhatsapp } from "react-icons/io";

// IoLogoWhatsapp SiMessenger
import styles from "@/styles/layout/Share.module.css";
// import { AiOutlineArrowUp } from "react-icons/ai";
import Link from "next/link";
// import { RiWhatsappLine } from "react-icons/ri";
const SocialMedia = ({ to }) => {
  const [height, setHeight] = useState(false);
  // useEffect(() => {
  //   setHeight(window.innerHeight);
  //   console.log(height);
  // }, [height]);

  const handleScroll2 = () => {
    if (window.scrollY >= 200) {
      setHeight(true);
      // console.log(window.scrollY);
      // console.log(height);
      // document.getElementById("Search_bar").className = "activeTop";
    } else {
      setHeight(false);
      // document.getElementById("Search_bar").rem.display = "block";
    }
  };
  // useCallback(() => {

  // },[])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll2, { passive: false });
    };
  });
  return (
    <div className={styles.SocialIcons}>
      <ul>
        <li>
          <span>
            <Link
              href={`${to}`}
              title="scroll to top"
              className={height ? styles.activeTop : ""}
            >
              {/* <AiOutlineArrowUp /> */}
              {/* <span className="icon-phone"></span> */}
              <span class="icon-arrow_upward"></span>
            </Link>
          </span>
        </li>
        <li>
          <span>
            <a
              aria-label="our whatsapp number"
              href={`https://wa.me/00201012894508`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <RiWhatsappLine /> */}
              {/* <span className="icon-phone"></span> */}
              <span class="icon-whatsapp"></span>
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
