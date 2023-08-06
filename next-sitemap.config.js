/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `http://mig-loadbalancer-1009989516.eu-central-1.elb.amazonaws.com`,
  generateRobotsTxt: true,
  exclude: ["/articels.index.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `http://mig-loadbalancer-1009989516.eu-central-1.elb.amazonaws.com/articels.index.xml`, // <==== Add here
      // "https://mohamed-ibrahiem.com/categories.index.xml"
    ],
  },
};
