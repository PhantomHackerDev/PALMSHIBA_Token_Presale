import Grid from "../components/Grid";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import Gallery from "./Gallery";
import Claim from "./Claim";
import Staking from "./Staking";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Tokenomics from "./Tokenomics";
import Header from "../components/Header";

const Home = () => {
  return (
    <Grid className="w-full h-full bg-[#04011C] overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <HowToBuy />
      <Roadmap />
      <Tokenomics />
      <Gallery />
      <Claim />
      <Staking />
      <FAQ />
      <Footer />
    </Grid>
  );
};

export default Home;
