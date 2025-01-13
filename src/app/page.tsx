import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Cards from "./components/cardspage";
import Transform from "./components/transform";
import Slidespage from "./components/slidespage";
import Videosection from "./components/videosection";
import Packagepage from "./components/Packagepage";
import Qpage from "./components/Qpage";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="bg-[#0c001b]">
      <Navbar />
      <Hero />
      <Cards />
      <Transform />
      <Slidespage />
      <Videosection />
      <Packagepage />
      <Qpage />
      <Footer />
    </div>
  );
}
