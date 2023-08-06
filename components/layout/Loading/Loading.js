import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
