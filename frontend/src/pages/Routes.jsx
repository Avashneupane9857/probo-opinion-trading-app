import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default Routing;
