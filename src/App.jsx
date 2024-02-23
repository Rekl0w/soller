import Banner from "./sections/Banner/Banner";
import Overview from "./sections/Overview/Overview";
import Services from "./sections/Services/Services";
import Topbar from "./sections/Topbar/Topbar";
import Features from "./sections/Features/Features";
import Carousel from "./sections/Carousel/Carousel";
import Case from "./sections/Case/Case";
import Buy from "./sections/Buy/Buy";
import Footer from "./sections/Footer/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Roboto" }}>
      <Topbar />
      <Banner />
      <Overview />
      <Services />
      <Features />
      <Carousel />
      <Case />
      <Buy />
      <Footer />
    </div>
  );
}
