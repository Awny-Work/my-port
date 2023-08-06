// import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";

import { auth } from "@/firebase";
import {
  // onAuthStateChanged,
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";
// import { BsFillPersonFill } from "react-icons/bs";
// import { RiLockPasswordFill } from "react-icons/ri";
import { Toast } from "primereact/toast";
import Cookies from "js-cookie";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const logIn = (name, password) => {
  //   return signInWithEmailAndPassword(auth, name, password);
  // };
  const SendDate = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      EMptyInput("برجاء ادخال جميع البيانات");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          // console.log(data.user.uid);
          Cookies.set("PortCom", true);
          Cookies.set("PortUIDToken", `${data.user.uid}`);
          router.push("/dashboard/completed-projects");
        })
        .catch((err) => {
          EMptyInput(err.message);
        });
      // createUserWithEmailAndPassword(auth, email, password);
      // if (email === "admin" && password === "Server2023Next") {
      //   Cookies.set("awnyPortCom", true);
      //   Cookies.set(
      //     "awnyPortComToken",
      //     "jkdasniuashyd7qwhduq-845q4weoq*/q-/skdkjasd"
      //   );
      //   router.push("/dashboard/completed-projects");
      // } else {
      //   EMptyInput("الاسم او كلمة السر غير صحيحه");
      // }
    }

    // else {
    //   const data = {
    //     name,
    //     password,
    //   };
    //   dispatch(getLogin(data))
    //     .unwrap()
    //     .then((originalPromiseResult) => {
    //       if (originalPromiseResult.Result === false) {
    //         showError();
    //       } else {
    //         dispatch(GetFromCart(originalPromiseResult.id));
    //         dispatch(getjsonStrings(originalPromiseResult.id));
    //         navigate(`/cp`);
    //         showSuccess();
    //       }
    //     })
    //     .catch((rejectedValueOrSerializedError) => {
    //       console.log(rejectedValueOrSerializedError);
    //     });
    // }
  };
  const toast = useRef(null);
  const EMptyInput = (mess) => {
    toast.current.show({
      severity: "error",
      summary: `${mess}`,
      life: 3000,
    });
  };
  return (
    <>
      <Toast ref={toast} />
      <div className="LoginPage">
        <h1 className="text-center main-title">تسجيل الدخول</h1>
        <Form>
          <div className="search-section input-div">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" الاسم "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="name">
              <span className="icon-contact_mail"></span>
            </label>
          </div>
          <div className="search-section input-div">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">
              <span className="icon-contact_mail"></span>
            </label>
          </div>

          <button
            name="login"
            type="submit"
            className="submit-button"
            onClick={(e) => {
              SendDate(e);
            }}
          >
            تسجيل الدخول
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
