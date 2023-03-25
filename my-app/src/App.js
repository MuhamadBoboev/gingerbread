import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./common/Preloader";
import AuthContainer from "./components/auth/AuthContainer";
import ContentContainer from "./components/content/ContentContainer";
import ContentContainerTwo from "./components/content/ContentContainerTwo";

function App() {
  return (
    <div className="App">
      {/* <Link to="asd">asd</Link> */}
      <div className="_container">
        <Routes>
          <Route path="" element={<ContentContainer />}></Route>
          {/* <Route path="1" element={<ContentContainerTwo />}></Route> */}
          <Route path={"asd"} element={<AuthContainer />}></Route>
          <Route path={"aaaa"} element={<Preloader />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
