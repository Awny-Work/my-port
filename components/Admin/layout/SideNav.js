// import { FiLogOut } from "react-icons/fi";
// import { CgProfile } from "react-icons/cg";
// import { FcAcceptDatabase } from "react-icons/fc";
// import { TbDental } from "react-icons/tb";

// FcAcceptDatabase
// import { Logout } from "../../../store/ControlPanalSlice";
// import { ClearCart } from "../../../store/ShopSlice";
import Link from "next/link";
// import Image from "next/legacy/image";
import styles from "@/styles/pages/Dashboard.module.css";
import Cookies from "js-cookie";

const SideNav = () => {
  const Logout = () => {
    Cookies.remove("awnyPortCom");
    Cookies.remove("awnyPortComToken");
    // router.push("/")
  };
  // const NavHeader = (
  //   <div className={styles.control_nav_header}>
  //     <div className={styles.Card_image}>
  //       <Image
  //         src={`/images/profile.svg`}
  //         alt="name"
  //         priority
  //         width={50}
  //         height={50}
  //       />
  //     </div>
  //     <div className={styles.info}>
  //       <h4> Admin </h4>
  //       <p>awny@gmail.com</p>
  //     </div>
  //   </div>
  // );

  return (
    <div className={`${styles.ContolNav} `}>
      {/* ${type === "navBottom" ? "navBottom" : ""} */}
      {/* {NavHeader} */}

      <div className={`${styles.main_control_nav} ${styles.nav_pad}`}>
        {/* <Link
          // style={navLinkStyles}
          href={"/dashboard/profile"}
          // className={styles.edite_buuton}
        >
          <CgProfile />
          الملف الشخصي
        </Link> */}
        <Link
          // style={navLinkStyles}
          href={"/dashboard/completed-projects"}
          // className={styles.edite_buuton}
        >
          <span className="icon-contact_mail"></span>
          Completed Projects
        </Link>
        {/* <Link
          // style={navLinkStyles}
          href={"/dashboard/completed-projects"}
          // className={styles.edite_buuton}
        >
          <span className="icon-contact_mail"></span>
          Tranning Projects
        </Link> */}
        <Link
          onClick={() => Logout()}
          // style={navLinkStyles}
          href={"/"}
        >
          <span className="icon-contact_mail"></span>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
