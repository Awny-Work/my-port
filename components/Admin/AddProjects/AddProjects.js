import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { db, storage } from "@/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState, useRef } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { Toast } from "primereact/toast";
import { GetTeamProjects } from "@/store/ProjectSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import styles from "@/styles/pages/Dashboard.module.css";
// import { async } from "@firebase/util";
const AddProjects = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [num, setNum] = useState("");
  const [imagePath, setImagePath] = useState(null);
  const [Project_Type, setProjectType] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  // const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const uId = Cookies.get("PortUIDToken");
  const dbInstance = collection(db, `projects`);
  // const dbInstance = collection(db, `Users/${uId}`, "Projects");
  const dispatch = useDispatch();
  const GetNotes = () => {
    getDocs(dbInstance).then((data) => {
      dispatch(
        GetTeamProjects(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        )
      );
    });
  };
  const project_Select_Type = [
    { name: "Live Projects" },
    { name: "Training Projects" },
    { name: "Landing Pages " },
    { name: "Web Application" },
    { name: "Certification" },
  ];
  // const project_Select_Type = [
  //   { name: "Completed Projects" },
  //   { name: "Training Projects" },
  // ];
  const UploadImage = () => {
    // console.log(Project_Type);
    if (
      !imagePath ||
      num.length === 0 ||
      link.length === 0 ||
      name.length === 0 ||
      !Project_Type
    ) {
      // console.log(imagePath);
      // console.log(num);
      // console.log(link);
      // console.log(name);
      // console.log(Project_Type);
      EMptyInput("Error Data Empty");
    } else {
      // console.log(imagePath);

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
              setImagePath(null);
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

  // Multi Images

  const handleUpload = async (file) => {
    // const promises = [];
    const ALlImages = [...file];
    ALlImages.map((image) => {
      const ImageRef = ref(storage, `images/${image.name}`);
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
          console.log(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log(downloadURL);
            const res = downloadURL;
            setUrls((current) => [...current, res]);
            // promises.push(uploadTask);
          });
        }
      );
    });
  };
  // const SendData = (e) => {
  //   if (
  //     num.length === 0 ||
  //     link.length === 0 ||
  //     name.length === 0 ||
  //     Project_Type === null ||
  //     urls.length <= 0
  //   ) {
  //     EMptyInput("برجاء اختيار الصور و ادخال جميع البيانات");
  //   } else {
  //     addDoc(dbInstance, {
  //       ImgURl: urls,
  //       name,
  //       link,
  //       num,
  //       type: Project_Type.name,
  //     }).then(() => {
  //       // GetNotes();
  //       setUrls([]);
  //       setName("");
  //       setNum("");
  //       setLink("");
  //       setProjectType(null);
  //       GetNotes();
  //     });
  //   }
  // };

  const toast = useRef(null);
  const EMptyInput = (ele) => {
    toast.current.show({
      severity: "error",
      summary: `${ele}`,
      life: 3000,
    });
  };
  return (
    <div>
      <Toast ref={toast} />
      <div className={styles.change_store_image}>
        <input
          type="file"
          style={{ display: "none" }}
          id="Up_Image"
          name="Up_Image"
          accept="image/*"
          multiple={true}
          onChange={(e) => {
            // handleUpload(e.target.files);
            setImagePath(e.target.files[0]);
            // console.log(e.target.files[0])
          }}
        />
        <label htmlFor="Up_Image">
          {" "}
          <span className="icon-contact_mail"></span>
        </label>
        <label htmlFor="Up_Image"> اضغط لأختيار الصورة </label>
        <label htmlFor="Up_Image">Browse files</label>
      </div>
      {parseInt(progresspercent) > 0 && (
        <progress value={progresspercent} max={"100"} />
      )}
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
        {/* <div className="col-md-12"></div> */}
      </div>
    </div>
  );
};

export default AddProjects;
