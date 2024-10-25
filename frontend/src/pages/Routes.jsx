import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Events from "./Events";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default Routing;
