import Cookies from "js-cookie";

const LangChaneg = ({ children }) => {
  return (
    <div
      className="container-xxl main_Web_Comtainer"
      style={{
        textAlign: "right",
        minHeight: "500px",
        direction: Cookies.get("MIgdir") === "true" ? "rtl" : "ltr ",
      }}
    >
      {children}
    </div>
  );
};

export default LangChaneg;
