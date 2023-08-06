import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import styles from "@/styles/layout/Tabel.module.css";
import { db, storage } from "@/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useCallback, useEffect } from "react";
import { ref, deleteObject } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { GetTeamProjects } from "@/store/ProjectSlice";
import Cookies from "js-cookie";

const ProjecTabels = ({ path }) => {
  const dispatch = useDispatch();
  const { TeamProjects } = useSelector((state) => state.ProjectSlice);
  const uId = Cookies.get("PortUIDToken");
  const dbInstance = collection(db, `projects`);
  // const dbInstance = collection(db, `Users/${uId}`, path);
  // const [DataState, setData] = useState([]);
  const GetNotes = useCallback(() => {
    getDocs(dbInstance).then((data) => {
      dispatch(
        GetTeamProjects(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        )
      );
    });
  }, [dbInstance, dispatch]);

  useEffect(() => {
    if (TeamProjects.length <= 0) {
      GetNotes();
    }
  }, [TeamProjects, GetNotes]);

  const [filters2, setFilters2] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    num: { value: null, matchMode: FilterMatchMode.CONTAINS },
    type: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [selectedProduct1, setSelectedProduct1] = useState(null);

  const DeleteFromStorage = async (ele) => {
    const allImages = [...ele];
    allImages.map((img) => {
      const ImageRef = ref(storage, img);
      const ImageRef2 = ref(storage, `images/${ImageRef.name}`);
      deleteObject(ImageRef2);
    });
  };

  const deleteNote = (eleID) => {
    console.log(eleID);
    const collectionById = doc(db, `Users/${uId}/${path}`, eleID);
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
            // DeleteFromStorage(rowData.ImgURl);
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
        <DataTable
          scrollable
          scrollHeight="100vh"
          selectionMode="single"
          selection={selectedProduct1}
          value={TeamProjects}
          paginator
          className={`${styles.dataTabel}`}
          rows={10}
          dataKey="id"
          filters={filters2}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name", "Id", "mobile", "email"]}
          emptyMessage="  لا يوجد بيانات الان "
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
