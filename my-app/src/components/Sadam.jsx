import { connect } from "react-redux";
import {
  Navigate,
  redirect,
  unstable_HistoryRouter,
  useNavigate,
} from "react-router-dom";

const Sadam = (props) => {
  // debugger;
  // console.log("sadam: " + props.authDate.isAuth);
  const navigate = useNavigate();
  if (!props.authDate.isAuth) {
    // return <Navigate to="/login" />;
    // return redirect("/login");

    console.log("sadam: " + props.authDate.isAuth);
    // navigate("/login");

    return <div>0000000000000000000000000000000000000</div>;
  } else {
    console.log("sadam: " + props.authDate.isAuth);
    return <div>Sadam is a best backend-develover</div>;
  }
};
let mapStateToProps = (state) => ({
  authDate: state.auth,
});
export default connect(mapStateToProps, {})(Sadam);
