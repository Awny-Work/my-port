import { useEffect, useState } from "react";

const ToogleTheme = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("ATWThem", activeTheme);
  }, [activeTheme]);
  return (
    <label
      className={`labelTheme ${activeTheme !== "light" ? "bgwhite" : "bgdark"}`}
      onClick={() => {
        setActiveTheme(inactiveTheme);
        window.dispatchEvent(new Event("storage"));
      }}
    >
      {/* <input type="checkbox" /> */}
      <span
        className={`icon-moon-fill ${
          activeTheme !== "light" ? "nomoon" : "moon"
        }`}
      ></span>
      <span
        className={`icon-sun1 ${activeTheme === "light" ? "sun" : "nosun"}`}
      ></span>
      <div
        className={`toogleTheme ${
          activeTheme !== "light" ? "lightActive" : "darkactive"
        }`}
      ></div>
      {/* <button onClick={() => setActiveTheme(inactiveTheme)}>dark</button> */}
      {/* <button onClick={() => window.localStorage.setItem("ATWThem", "light")}>
          light
        </button> */}
    </label>
  );
};

export default ToogleTheme;
