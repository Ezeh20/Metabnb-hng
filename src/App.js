import { Routes, Route } from "react-router-dom";
import Nav from "./Route/Navigation-route-component/navigation-component";
import LandingPage from "./Components/LandingPage-component";
import Place from "./Route/place-to-stay-component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<LandingPage />} />
        <Route path="place-to-stay" element={<Place />} />
      </Route>
    </Routes>
  );
}

export default App;
