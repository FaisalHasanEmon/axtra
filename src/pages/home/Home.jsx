import Banner from "../../components/Banner/Banner";
import HomePageNav from "../../components/Navbar/HomePageNav/HomePageNav";

const Home = () => {
  return (
    <div>
      <HomePageNav></HomePageNav>
      <div className="pt-28 -z-10">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
