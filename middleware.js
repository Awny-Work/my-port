const { NextResponse } = require("next/server");

export default function middleware(req) {
  const verify = req.cookies.get("PortCom");
  const verifytoken = req.cookies.get("PortUIDToken");
  let url = req.url;
  if (!verify && url.includes("/dashboard") && !verifytoken) {
    // return NextResponse.redirect(
    //   "https://awny-community.netlify.app/auth/login"
    // );
    return NextResponse.redirect("http://localhost:3000/auth/login");
  }
  // if (verify && url.includes("http://localhost:3000/")) {
  //   return NextResponse.redirect("http://localhost:3000/dashboard")

  // }
}
