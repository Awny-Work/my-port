// import LoadingScreen from "@/components/Home/LoadingScreen/LoadingScreen";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";

const LoadingWrap = ({ children }) => {
  const { isHomeLoading } = useSelector((state) => state.HomeSlice);

  return (
    <>
      {isHomeLoading && <Loading />}
      {children}
    </>
  );
};

export default LoadingWrap;
