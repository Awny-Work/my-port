import Image from "next/legacy/image";
// import "./loading.css";
const LoadingScreen = () => {
  return (
    <div className="Loader mainLoader">
      <div className="LoadingImage">
        <Image
          src={"/images/Final_logo_png.png"}
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
