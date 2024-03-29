import { Outlet } from "react-router-dom";
import TopBar from "../ui/navbar/TopBar";
import Navbar from "../ui/navbar/Navbar";
import ConvertionF from "../ui/footer/ConvertionF";
import Footer from "../ui/footer/Footer";
import Offerd from "../ui/Offerd";
import MiddleBanner from "../../page/home/MiddleBanner";
import Sestion from "../../page/home/Sestion";
import Contact from "../../page/home/Contact";
import AskQutions from "../../page/home/AskQutions";
import MovingText from "../../page/home/MovingText";
import Banner from "../../page/home/Banner";

const MainLayout = () => {
  return (
    <div className="bg-[#eeedeb]">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Sestion></Sestion>
      <MiddleBanner></MiddleBanner>
      <Contact></Contact>
      <AskQutions></AskQutions>
      <MovingText></MovingText>
      <Offerd></Offerd>
      <ConvertionF></ConvertionF>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
