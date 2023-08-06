// import { AiFillPlayCircle } from "react-icons/ai";
import Cookies from "js-cookie";
import styles from "@/styles/layouts/Card.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import Image from "next/legacy/image";
import Link from "next/link";

const MeetingCard = ({
  type,

  title,
  sub_title,
  main_image,

  id,
}) => {


  return (
    <Link
      href={`/article/${title.replace(/\s/g, "-")}/${id}/${Cookies.get(
        "MIgLanSymbol"
      )}`}
      className={`${styles.card} ${styles.MeetCard}`}
    
    >
      <div
        className={styles.ImaegContainer}
        style={{
          // flexBasis: type === "small" ? "170px" : "100%",
          // width: type === "small" ? "170px" : "100%",
          minHheight: type === "tiny" ? "180px" : "400px",
        }}
      >
        <Image
          layout="fill"
          objectFit="fill"
          objectPosition={"center"}
          // src={main_image}
          src={`${process.env.customKey}/${main_image}`}
          alt="name"
        />
        {/* <div className={styles.play}>
          <BsFillPlayFill />
        </div> */}
      </div>
      <div
        className={styles.info}
        style={{
          textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
        }}
      >
        <h3> {title}</h3>
        <h4> {sub_title}</h4>
      </div>
    </Link>
  );
};

export default MeetingCard;
