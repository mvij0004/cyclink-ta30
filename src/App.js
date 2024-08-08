import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PlotRComponent from "./components/PlotRComponent";
import PlotPyComponent from "./components/PlotPyComponent";
import Home from "./pages/Home";
import Incident from "./pages/Incident";
import RouteIn from "./pages/RouteIn";
import Severity from "./pages/Severity";
import Geospatial from "./pages/Geospatial";

// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/incident" element={<Incident />} />
          <Route path="/route" element={<RouteIn />} />
          <Route path="/geospatial" element={<Geospatial />} />
          <Route path="/severity" element={<Severity />} />
        </Routes>

        {/* <PlotRComponent />
        <PlotPyComponent /> */}
      </div>
    </div>
  );
}

export default App;
