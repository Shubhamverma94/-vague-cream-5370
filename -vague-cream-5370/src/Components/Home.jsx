// import Banner from "./Banners/Banner";
import {
  comingSoon,
  tales,
  mysteries,
  voice,
  extraOrd,
  creatures,
  jumboSliderData,
  dramaSeries,
  severWN,
  featurefilms,
  comSeries,
  amazPlanet,
  nonFi,
  kidsFam,
} from "../Data/Data";
import { Box } from "@chakra-ui/react";
// import { Footer } from "./Footer/Footer";
// import MiniBanner from "./MiniBanner/MiniBanner";
import { CardCarousel } from "../MiniCard/CardCarousel";
import BackgroundVideo from "./BackgroundVideo";

function Home() {
  return (
    
    <Box>
      {/* <Banner /> */}
      <BackgroundVideo />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <CardCarousel
        data={comingSoon}
        title={"Trying: Watch Season 1 Free Through This Weekend"}
        minititle={"A London couple wants to start a family in this heartfelt comedy."}
      />
      <CardCarousel data={tales} title={"Most Popular Now"}  />
      <CardCarousel data={mysteries} title={"Emmy Nominees"} 
          minititle={"Explore the series that are up for television's biggest prize."} />
      <CardCarousel data={voice} title={"Watch Entire Seasons"} />
      {/* <MiniBanner data={jumboSliderData} /> */}
      <CardCarousel data={extraOrd} title={"Extraordinary People"} />
      <CardCarousel data={creatures} title={"Creatures & Critters"} />
      <CardCarousel data={dramaSeries} title={"All Drama Series"} />
      <CardCarousel
        data={severWN}
        title={"Severance: Watch Now"}
        minititle={
          "Adam Scott stars in a darkly thrilling new series from Ben Stiller."
        }
      />
      <CardCarousel data={comSeries} title={"All Comedy Series"} />
      <CardCarousel
        data={amazPlanet}
        title={"Our Amazing Planet"}
        minititle={"Explore nature documentary films and series."}
      />
      <CardCarousel data={nonFi} title={"All Nonfiction Series"} />
      <CardCarousel
        data={kidsFam}
        title={"Kids and Family"}
        minititle={
          "Discover shows and movies filled with wonder and imagination."
        }
      />
      {/* <Footer /> */}
    </Box>
  );
}

export default Home;
