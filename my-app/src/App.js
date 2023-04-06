import { Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./common/Preloader";
import AuthContainer from "./components/auth/AuthContainer";
// import ContentContainer from "./components/content/ContentContainer";
import ContentContainerTwo from "./components/content/ContentContainerTwo";
import HeaderContainer from "./components/header/HeaderContainer";
import HomePage from "./components/homePage/HomePage";
import Sadam from "./components/Sadam";
// import ContentContainer from "./components/content/ContentContainer";
import Layout from "./components/Layout";
import ContentContainer from "./components/content/ContentContainer";
import { connect } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />;
    </QueryClientProvider>
  );
}

export default App;

// <div className="App">
//   {/* <div className="header"></div> */}
//   {/* <HeaderContainer /> */}
//   {/* <Link to="asd">asd</Link> */}
//   <div className="_container">
//     <Routes>
//       {/* <Route path="/" element={<Layout />}> */}
//       <Route path="/" element={<ContentContainer />} />
//       {/* <Route path="" element={<Sadam />} /> */}
//       {/* <Route path="1" element={<ContentContainerTwo />}></Route> */}
//       <Route path={"/login"} element={<AuthContainer />} />
//       {/* <Route path={"aaaa"} element={<Preloader />}></Route> */}
//       {/* </Route> */}
//     </Routes>
//   </div>
// </div>
