import Banner from "./sections/Banner/Banner";
import Overview from "./sections/Overview/Overview";
import Services from "./sections/Services/Services";
import Topbar from "./sections/Topbar/Topbar";
import Features from "./sections/Features/Features";
import Carousel from "./sections/Carousel/Carousel";

export default function App() {
  return (
    <div style={{fontFamily: 'Roboto'}}>
      <Topbar />
      <Banner />
      <Overview />
      <Services />
      <Features />
      <Carousel />
    </div>
  );
}
