import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";

// import Header from "../../Components/Header/Header";
import IPad from "../../Components/IPad/IPad";
import IPadPro from "../../Components/IPadPro/IPadPro";
import IPhone14 from "../../Components/IPhone14/IPhone14";
import IPhone14Pro from "../../Components/IPhone14Pro/IPhone14Pro";
import WatchUltra from "../../Components/WatchUltra/WatchUltra";
import WatchSeries8AirPodsPro from "../../Components/WatchSeries8AirPodsPro/WatchSeries8AirPodsPro";
import WatchSEFitness from "../../Components/WatchSEFitness/WatchSEFitness";
import MacBookAirAppleCard from "../../Components/MacBookAirAppleCard/MacBookAirAppleCard";
import SlideImages from "../../Components/SlideImages/SlideImages";
import PagesTemplate from "../PagesTemplate";
// import YoutubeVideosTemplate from "../../Components/YoutubeVideos/YoutubeVideosTemplate";
// import Footer from "../../Components/Footer/Footer";

function Main() {
  return (
    <>
      {/* <Header /> */}
      <PagesTemplate
        bgLogoClass="container-fluid MacBookPro bg-imgs white"
        BrandName="MacBook Pro"
        Descriptions="Mover. Maker. Boundary breaker."
        PriceFrom="From $1999"
        Price="Available starting 1.24"
      />

      <PagesTemplate
        bgLogoClass="container-fluid MacMini bg-imgs white"
        BrandName="Mac mini"
        Descriptions="More muscle. More hustle."
        PriceFrom="From $599"
        Price="Available starting 1.24"
      />

      <IPad />
      <IPadPro />
      <IPhone14 />
      <IPhone14Pro />
      <WatchUltra />
      <WatchSeries8AirPodsPro />
      <WatchSEFitness />
      <MacBookAirAppleCard />
      {/* <YoutubeVideosTemplate /> */}
      <SlideImages />
      {/* <Footer /> */}
    </>
  );
}

export default Main;
