import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import styles from "@/styles/layout/Tabel.module.css";
import { db, storage } from "@/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { ref, deleteObject } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { GetProjects } from "@/store/ProjectSlice";
const ProjecTabels = () => {
  const dispatch = useDispatch();
  const { Projects } = useSelector((state) => state.ProjectSlice);
  const dbInstance = collection(db, "projects");
  // const [DataState, setData] = useState([]);
  const GetNotes = useCallback(() => {
    getDocs(dbInstance).then((data) => {
      dispatch(
        GetProjects(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        )
      );
    });
  }, [dbInstance, dispatch]);

  useEffect(() => {
    if (Projects.length <= 0) {
      GetNotes();
    }
  }, [Projects, GetNotes]);

  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    num: { value: null, matchMode: FilterMatchMode.CONTAINS },
    type: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  // const [globalFilterValue2, setGlobalFilterValue2] = useState("");

  //   Global tabel Filter
  // const onGlobalFilterChange2 = (e) => {
  //   const value = e.target.value;
  //   let _filters2 = { ...filters2 };
  //   _filters2["global"].value = value;

  //   setFilters2(_filters2);
  //   setGlobalFilterValue2(value);
  // };

  //   Tabel Header
  // const renderHeader2 = () => {
  //   return (
  //     <div className={`flex justify-content-end ${styles.tabel_header}`}>
  //       <span className="p-input-icon-left">
  //         <i className="pi pi-search" />
  //         <InputText
  //           value={globalFilterValue2}
  //           onChange={onGlobalFilterChange2}
  //           placeholder="البحث في اي مكان"
  //         />
  //       </span>
  //     </div>
  //   );
  // };
  // const header2 = renderHeader2();
  const DeleteFromStorage = async (ele) => {
    const ImageRef = ref(storage, ele);
    const ImageRef2 = ref(storage, `images/${ImageRef.name}`);
    deleteObject(ImageRef2);
  };
  const deleteNote = (eleID) => {
    const collectionById = doc(db, "projects", eleID);
    deleteDoc(collectionById).then(() => {
      GetNotes();
    });
  };

  const StateBody = (rowData) => {
    return (
      <div className={styles.TB_Content}>
        <button
          className={`${styles.TabelButton} ${styles.Cancel}`}
          onClick={() => {
            deleteNote(rowData.id);
            DeleteFromStorage(rowData.ImgURl);
          }}
        >
          <span className="icon-close"></span>
        </button>
      </div>
    );
  };

  return (
    <>
      <div className={styles.Tabel}>
        {/* <div className="card"> */}
        <DataTable
          // head
          // header={header}
          scrollable
          scrollHeight="100vh"
          selectionMode="single"
          selection={selectedProduct1}
          // onSelectionChange={(e) => {
          //   setSelectedCats(e.value);
          //   setSelectedProduct1(e.value);
          //   setNameUpdate(e.value.name);
          //   setOrderUpdate(e.value.ord);
          //   setparentIDUpdate(e.value.parentId);
          //   setID(e.value.id);
          //   setUpdateImage1(e.value.activeIcon);
          //   setUpdateImage2(e.value.disabledIcon);
          //   // const [updateImage2, setUpdateImage2] = useState("");
          // }}
          value={Projects}
          paginator
          // className="p-datatable-customers"
          className={`${styles.dataTabel}`}
          rows={10}
          dataKey="id"
          filters={filters2}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name", "Id", "mobile", "email"]}
          // header={header2}
          emptyMessage="  لا يوجد عملاء بهذه البيانات"
        >
          <Column
            filterField="id"
            field="id"
            header=" Project Id"
            filter
            filterPlaceholder=" Project Id "
            style={{ minWidth: "12rem" }}
          />
          <Column
            filterField="name"
            field="name"
            header="Project Name"
            filter
            filterPlaceholder=" Project Name "
            style={{ minWidth: "12rem" }}
          />
          <Column
            filterField="num"
            field="num"
            header=" number "
            // filter
            filterPlaceholder=" number "
            style={{ minWidth: "12rem" }}
          />
          {/* <Column
            filterField="link"
            field="link"
            header="  link"
            // filter
            filterPlaceholder="link  "
            style={{ minWidth: "12rem" }}
          /> */}
          <Column
            filterField="type"
            field="type"
            header="  type"
            filter
            filterPlaceholder="type  "
            style={{ minWidth: "12rem" }}
          />
          <Column
            header="State"
            body={StateBody}
            style={{ minWidth: "12rem" }}
          />
          {/* <Column
        field="parentName"
        header="مجموعة رئيسية"
        showFilterMenu={false}
        filterMenuStyle={{ width: "14rem" }}
        style={{ minWidth: "12rem" }}
        body={parentCatTemplate}
        filter
        filterElement={ParentCatsFilterTemplate}
      />
      <Column
        field="ord"
        header="الترتيب"
        filterField="ord"
        body={CatOrderTemplate}
        style={{ minWidth: "12rem" }}
        filter
        filterPlaceholder="ادخل رقم التصنيف"
      /> */}
        </DataTable>
        {/* </div> */}
      </div>
    </>
  );
};

export default ProjecTabels;
