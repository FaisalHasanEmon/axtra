import Banner from "../../components/Banner/Banner";
import HomePageNav from "../../components/Navbar/HomePageNav/HomePageNav";
import Settings from "../../components/Settings/Settings";

const Home = () => {
  return (
    <div>
      <HomePageNav></HomePageNav>
      <Settings></Settings>
      <div className="pt-28 -z-10">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
