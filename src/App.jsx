import Header from "./Header";
import TopBody from "./Top-body";
import TopCategory from "./Top-categories";
import Featured from "./Featured";
import Insight from "./Insight";
import FeaturedLoca from "./FeaturedLoca";
import ImportantArt from "./ImportantArt";
import BottomEnd from "./BottomEnd";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <TopBody />
      <TopCategory />
      <Featured />
      <Insight />
      <FeaturedLoca />
      <ImportantArt />
      <BottomEnd />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
