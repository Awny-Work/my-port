import axios from "axios";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const result = await axios
    .get(`${process.env.customKey}/filter`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-localization": ctx.params.Lang,
      },
    })
    .then((res) => res.data);
  // console.log(result.data);

  // const { data } = await res.data.products;
  const fields = await result.data.map((ele) => ({
    loc: `${process.env.webDomain}/article/${ele.title.replace(/\s/g, "-")}/${
      ele.id
    }/${ctx.params.Lang}`,
    lastmod: new Date().toISOString(),
    priority: 0.7,
    changefreq: "daily",
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function SitemapIndex() {}
