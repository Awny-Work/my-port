import Header from "@/components/Home/Header/Header";
import SwiperApp from "@/components/layout/SwiperApp/SwiperApp";
const TeamPage = () => {
  return (
    <div className="container">
      <Header />
      <h1 className="main-title">Projects</h1>
      <div className="row">
        <div className="col-md-12 ">
          <SwiperApp />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
