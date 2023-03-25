import { connect } from "react-redux";
import { setAuthMe, authMe } from "../../redux/auth-reducer";
import Auth from "./Auth";

const AuthContainer = (props) => {
  return (
    <div>
      <Auth
        props={props.auth}
        setAuthMe={props.setAuthMe}
        authMe={props.authMe}
      />
    </div>
  );
};
let mapStateToProps = (state) => ({ auth: state.auth });
// let mapDispatchToProps = (dispatch) => ({
//   setAuthMe: setAuthMe(name, password),
// });
// let mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, { setAuthMe, authMe })(AuthContainer);
