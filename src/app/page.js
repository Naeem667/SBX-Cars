import AuctionList from "./components/AuctionCards";
import CarSlider from "./components/CarSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <CarSlider />
      <AuctionList />
      <Footer />
    </>
  );
}
