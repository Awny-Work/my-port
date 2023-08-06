import { PostSubscribe } from "@/store/SubscribeSlice";

import Cookies from "js-cookie";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
const Subscribe = ({ type, title }) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const showError = () => {
    toast.current.show({
      severity: "error",
      // summary: "Please Enter All Required Data",
      summary: "Please Enter Your Name and Email ",
      life: 3000,
    });
  };
  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Saved successfully",
      life: 3000,
    });
  };
  const SendData = () => {
    if (name.length <= 0 || email.length <= 0) {
      showError();
    } else {
      const data = {
        email,
        name,
      };
      dispatch(PostSubscribe(data))
        .unwrap()
        .then((res) => {
          if (res.success) {
            setName("");
            setEmail("");
            setVisible(false);
            showSuccess();
          }
        });
    }
  };
  return (
    <>
      <Toast ref={toast} />
      <div className={`shadow ${type}`}>
        <h2
          style={{
            textAlign: Cookies.get("MIgdir") === "true" ? "right" : "left",
          }}
          className={`main_title medium_title `}
        >
          {t("menu.subscribe.subscribe")}
          {/* Subscribe to our newsletter */}
        </h2>
        <form
          className="input_div"
          style={{
            flexDirection:
              Cookies.get("MIgdir") === "true" ? "row-reverse" : "row",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // name="email"
            placeholder={`${t("menu.subscribe.email")}`}
            // id="email"
          />
          <button
            name="submit"
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
              // router.push("/shop");
            }}
            type="button"
            aria-label="submit"
          >
            {t("menu.subscribe.subscribe_Btn")}
          </button>
        </form>

        <Dialog
          // header="Header"
          visible={visible}
          style={{ maxWidth: "95vw" }}
          onHide={() => setVisible(false)}
        >
          {/* <h2 className="main_two text-center">Subscribe</h2> */}

          <form className="input_div Dialog_div">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // name="text"
              placeholder={`${t("menu.subscribe.name")}`}
              // id="text"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              // name="email"
              placeholder={`${t("menu.subscribe.email")}`}
              // id="email"
            />

            <div className="text-center">
              <button
                name="submit"
                onClick={(e) => {
                  e.preventDefault();
                  SendData();
                  // router.push("/shop");
                }}
                type="submit"
                aria-label="submit"
              >
                {t("menu.subscribe.subscribe_Btn")}
              </button>
            </div>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default Subscribe;
