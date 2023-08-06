import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import styles from "@/styles/Home.module.css";
import { FaFacebookF } from "react-icons/fa";
import Cookies from "js-cookie";
// import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const FollowUs = () => {
  const { t } = useTranslation();

  // const { SocialArr } = useSelector((state) => state.HomeSlice);
  // const Facebook =
  //   SocialArr && SocialArr.find((ele) => ele.name === "Facebook");
  // const Instagram =
  //   SocialArr && SocialArr.find((ele) => ele.name === "Instagram");
  // const Youtube = SocialArr && SocialArr.find((ele) => ele.name === "Youtube");
  // const Twitter = SocialArr && SocialArr.find((ele) => ele.name === "Twitter");
  // const Linkedin =
  //   SocialArr && SocialArr.find((ele) => ele.name === "Linkedin");
  return (
    <div className="shadow">
      <h2
        style={{
          textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
        }}
        className="main_title medium_title"
      >
        {t("menu.follow_us")}
      </h2>

      <div className={styles.social}>
        <a href={"https://www.facebook.com/"} target="_blank">
          <FaFacebookF />
        </a>
        <a href={"https://www.twitter.com/"} target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href={"https://www.youtube.com/"} target="_blank">
          <AiOutlineYoutube />
        </a>
        <a href={"https://www.instagram.com/"} target="_blank">
          <BsInstagram />
        </a>
        <a href={"https://www.linkedin.com/"} target="_blank">
          <AiFillLinkedin />
        </a>
        {/* {Facebook && (
          <a
            href={`${Facebook?.link}`}
            aria-label={Facebook?.name}
            target="_blank"
          >
            <FaFacebookF />
          </a>
        )}
        {Twitter && (
          <a
            href={`${Twitter?.link}`}
            aria-label={Twitter?.name}
            target="_blank"
          >
            <AiOutlineTwitter />
          </a>
        )}
        {Youtube && (
          <a
            href={`${Youtube?.link}`}
            aria-label={Youtube?.name}
            target="_blank"
          >
            <AiOutlineYoutube />
          </a>
        )}
        {Instagram && (
          <a
            href={`${Instagram?.link}`}
            aria-label={Instagram?.name}
            target="_blank"
          >
            <BsInstagram />
          </a>
        )}
        {Linkedin && (
          <a
            href={`${Linkedin?.link}`}
            aria-label={Linkedin?.name}
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
        )} */}
      </div>
    </div>
  );
};

export default FollowUs;
