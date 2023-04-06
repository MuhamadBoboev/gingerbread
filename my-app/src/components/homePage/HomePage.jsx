import { Route, Routes } from "react-router-dom";
import Preloader from "../../common/Preloader";
import AuthContainer from "../auth/AuthContainer";
import ContentContainer from "../content/ContentContainer";
import HeaderContainer from "../header/HeaderContainer";
import { connect } from "react-redux";

const HomePage = (props) => {
  // debugger;
  return (
    <div className="App">
      <div className="header"></div>
      <HeaderContainer />
      <div className="_container">
        {props.state.auth.isAuth ? (
          <Routes>
            <Route path="/" element={<ContentContainer />}></Route>
            <Route path={"login"} element={<AuthContainer />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route index element={<AuthContainer />}></Route>
          </Routes>
        )}
        {/* <Routes>
          <Route path="/" element={<ContentContainer />}></Route>
          <Route path={"login"} element={<AuthContainer />}></Route>
        </Routes> */}
      </div>
    </div>
  );
};
let mapStateToProps = (state) => ({
  state: state,
});
export default connect(mapStateToProps, {})(HomePage);
