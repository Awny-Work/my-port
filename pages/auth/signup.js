// import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { auth, db, storage } from "@/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Toast } from "primereact/toast";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const dbInstance = db.collection();

  const SendDate = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      EMptyInput("برجاء ادخال جميع البيانات");
    } else {
      // signInWithEmailAndPassword(auth, name, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          // const dbInstance = collection(db, `useresTest`);
          Cookies.set("PortCom", true);
          Cookies.set("PortUIDToken", `${data.user.uid}`);
          setDoc(doc(db, "Users", data.user.uid), {
            name,
            email,
            password,
            id: data.user.uid,
          });
          router.push("/dashboard/completed-projects");
        })
        .catch((err) => {
          // console.log(err.message);
          // EMptyInput(err.message.slice("16"));
          EMptyInput(err.message);
        });
      // if (email === "admin" && password === "Server2023Next") {
      // router.push("/dashboard/completed-projects");
      // } else {
      //   EMptyInput("الاسم او كلمة السر غير صحيحه");
      // }
    }
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
        <h1 className="text-center main-title"> انشاء حساب جديد</h1>
        <Form>
          <div className="search-section input-div">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" User Name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name">
              <span className="icon-contact_mail"></span>
            </label>
          </div>
          <div className="search-section input-div">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" Email "
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
              placeholder=" Password"
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

export default SignUp;
