import styles from "@/styles/Tools/ConvertCase.module.css";
import { useRef, useState } from "react";

const ConvertCase = () => {
  const [text, setText] = useState("");
  const [type, setType] = useState("lowercase");
  const ref = useRef();
  const CopyFun = () => {
    ref.current.select();
    ref.current.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(ref.current.value);
  };

  const Calc = () => {
    console.log(`char with space ${text.split(" ").join("").length}`);
    console.log(`char without space ${text.length}`);
    console.log(`word ${text.split("").join("").split(" ").length}`);
    console.log(text.split(" "));
    // console.log(`word ${text.split(" ")}`);
    console.log(`line ${text.split(".").length} `);
    // console.log(`line ${text.split(".")} `);
    console.log(text.split("."));
  };
  return (
    <div className="main">
      <div className={styles.area}>
        <textarea
          ref={ref}
          rows={10}
          cols={20}
          style={{ textTransform: type }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"enter Pargraph"}
        />
      </div>

      <button onClick={() => setType("uppercase")}>Upper case</button>
      <button onClick={() => setType("lowercase")}>lower Case</button>
      <button onClick={() => setType("lowercase")}>Title Case</button>
      <button onClick={() => setType("capitalize")}>capitalize</button>
      <button onClick={() => CopyFun()}>copy </button>
      <button onClick={() => Calc()}>Calc </button>
    </div>
  );
};

export default ConvertCase;
