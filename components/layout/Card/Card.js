// import styles from "../../../styles/layouts/Card.module.css";
import Cookies from "js-cookie";
import styles from "@/styles/layouts/Card.module.css";
import Image from "next/legacy/image";
import Link from "next/link";
const Card = ({
  type,
  person,
  writer,
  title,
  sub_title,
  main_image,
  authors,
  description,
  id,
}) => {
  const PathName = title?.replace(/\s/g, "-");
  return (
    <Link

      href={`/article/${PathName}/${id}/${Cookies.get("MIgLanSymbol")}`}
      className={`${styles.card} ${type === "LrgCRD" && "LrgCRD"}
      ${type === "MiniTiny" && styles.MiniTinyCard}
      `}
      style={{
      
        textAlign: "right",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div
        className={`${styles.ImaegContainer}
        ${
          type === "tiny"
            ? styles.tiny
            : type === "small"
            ? styles.small
            : type === "MiniTiny"
            ? styles.MiniTiny
            : styles.normal
        }
        
        `}
        style={{
          flexBasis: type === "small" ? "170px" : "100%",
          width: type === "small" ? "170px" : "100%",
          minHheight:
            type === "tiny"
              ? "200px"
              : type === "small"
              ? "170px"
              : type === "MiniTiny"
              ? "116px"
              : "373px",
        }}
      >
        {main_image && (
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition={"center"}

            src={`${process.env.customKey}/${main_image}`}
            priority
      
            alt="name"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        )}
      </div>
      <div
        style={{
          flexBasis: type === "small" ? "61%" : "100%",
          marginRight: "10px",
          width: "100%",
        }}
      >
        <div
          className={styles.info}
          style={{
            textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
            direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
          }}
        >
          <h3
            style={{
              fontSize: type === "MiniTiny" && "20px",
            }}
          >
            {title}
          </h3>
          <h4
            style={{
              fontSize: type === "MiniTiny" && "18px",
            }}
          >
            {sub_title}
          </h4>
          {type !== "MiniTiny" && (
            <p>
              {description}
      
            </p>
          )}
        </div>
        {writer && authors && (
          <div
            className={styles.footer}
            style={{
              direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr",
            }}
          >
            <div className={styles.imgfooter}>
              {person && (
                <Image
                  width={32}
                  height={32}
                  src={`${process.env.customKey}/${
                    authors[0].imageURL
                      ? authors[0].imageURL
                      : "/images/authors/author-1690712622580.png"
                  }`}
                  alt="person"
                />
              )}
            </div>
            <p>{authors[0].name}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
