import { useEffect } from "react";
import { connect } from "react-redux";
import { authMe } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
  useEffect(() => {
    props.authMe();
  }, [props.authDate.isAuth]);
  // debugger;

  // console.log(`Auth header is: ${props.authDate}`);
  // debugger;
  return (
    <div className="header_container">
      <h1>Welcome {props.authDate.login}</h1>
    </div>
  );
};
let mapStateToProps = (state) => ({
  authDate: state.auth,
});
// let mapDispatchToProps

export default connect(mapStateToProps, { authMe })(HeaderContainer);
