const { NextResponse } = require("next/server");

export default function middleware(req) {
  const verify = req.cookies.get("awnyPortCom");
  const verifytoken = req.cookies.get("awnyPortComToken");
  let url = req.url;
  if (
    !verify &&
    url.includes("/dashboard") &&
    !verifytoken &&
    verifytoken !== "jkdasniuashyd7qwhduq-845q4weoq*/q-/skdkjasd"
  ) {
    // return NextResponse.redirect(
    //   "https://awny-community.netlify.app/auth/login"
    // );
    return NextResponse.redirect("http://localhost:3000/auth/login");
  }
  // if (verify && url.includes("http://localhost:3000/")) {
  //   return NextResponse.redirect("http://localhost:3000/dashboard")

  // }
}
