import SideNav from "@/components/Admin/layout/SideNav";
import { db, storage } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useCallback, useEffect, useRef } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import styles from "@/styles/pages/Dashboard.module.css";
import { InputText } from "primereact/inputtext";
import ProjecTabels from "@/components/Admin/Tabels/ProjectsTabels";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import { GetProjects } from "@/store/ProjectSlice";
import { useDispatch } from "react-redux";
const CompletedProjects = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [num, setNum] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [Project_Type, setProjectType] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const dbInstance = collection(db, "projects");
  const dispatch = useDispatch();
  const GetNotes = () => {
    getDocs(dbInstance).then((data) => {
      dispatch(
        GetProjects(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        )
      );
    });
  };
  // Upload Images
  const project_Select_Type = [
    { name: "Live Projects" },
    { name: "Training Projects" },
    { name: "Landing Pages " },
    { name: "Web Application" },
  ];
  const UploadImage = () => {
    // console.log(Project_Type);
    if (
      imagePath.length === 0 ||
      num.length === 0 ||
      link.length === 0 ||
      name.length === 0 ||
      Project_Type === null
    ) {
      EMptyInput("برجاء اختيار الصورة");
    } else {
      const ImageRef = ref(storage, `images/${imagePath.name}`);
      const uploadTask = uploadBytesResumable(ImageRef, imagePath);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(dbInstance, {
              ImgURl: downloadURL,
              name,
              link,
              num,
              type: Project_Type.name,
            }).then(() => {
              GetNotes();
              setImagePath("");
              setName("");
              setNum("");
              setLink("");
              setProjectType(null);
            });
          });
        }
      );
    }
  };

  const toast = useRef(null);
  const EMptyInput = (ele) => {
    toast.current.show({
      severity: "error",
      summary: `${ele}`,
      life: 3000,
    });
  };
  return (
    <div className="container-fluid">
      <Toast ref={toast} />
      <div className="row">
        <div className="col-md-3">
          <SideNav />
        </div>
        <div className="col-md-9">
          <h1 className="main-title">Projects</h1>
          <div className={styles.change_store_image}>
            <input
              type="file"
              style={{ display: "none" }}
              id="storeImage"
              name="storeImage"
              accept="image/*"
              multiple={true}
              onChange={(e) => {
                setImagePath(e.target.files[0]);
              }}
            />
            <label htmlFor="storeImage">
              {" "}
              <span className="icon-contact_mail"></span>
            </label>
            <label htmlFor="storeImage"> اضغط لأختيار الصورة </label>
            <label htmlFor="storeImage">Browse files</label>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <span className="p-float-label">
                <Dropdown
                  id={"support"}
                  className={styles.InputSec}
                  value={Project_Type}
                  onChange={(e) => setProjectType(e.value)}
                  options={project_Select_Type}
                  optionLabel="name"
                  // placeholder=" هل مدعوم من سكني؟ "
                />
                <label htmlFor="support"> Type </label>
              </span>
            </div>
            <div className="col-md-6">
              <span className="p-float-label">
                <InputText
                  id="proName"
                  className={styles.InputSec}
                  // placeholder="الاسم"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="username">name</label>
              </span>
            </div>
            <div className="col-md-6">
              <span className="p-float-label">
                <InputText
                  id="proName"
                  className={styles.InputSec}
                  // placeholder="الاسم"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
                <label htmlFor="username">link</label>
              </span>
            </div>
            <div className="col-md-6">
              <span className="p-float-label">
                <InputText
                  id="proName"
                  className={styles.InputSec}
                  // placeholder="الاسم"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
                <label htmlFor="username">number</label>
              </span>
            </div>
            <div className="col-md-12">
              <button onClick={UploadImage} className={styles.upoladImagesBtn}>
                Save
              </button>
            </div>
            <div className="col-md-12">
              <ProjecTabels />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
