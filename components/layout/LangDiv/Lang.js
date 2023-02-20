const Lang = (props) => {
  return (
    <div dir={`${window.localStorage.getItem("lan") === "ar" ? "rtl" : "ltr"}`}>
      {props.children}
    </div>
  );
};

export default Lang;
