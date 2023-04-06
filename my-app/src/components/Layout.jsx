import { Outlet } from "react-router-dom";
import HeaderContainer from "./header/HeaderContainer";

const Layout = () => {
  return (
    <div className="Layout">
      <HeaderContainer />
      <br></br>
      <div className="content">
        <Outlet />
      </div>
      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};
export default Layout;
