import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "./Content";
import {
  getData,
  postData,
  deleteDataApi,
  updateDataApi,
  addChangeText,
} from "../../redux/content-reducer";
import Test from "./Test";
import "./content.css";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate, useLocation } from "react-router-dom";
import { authMe } from "../../redux/auth-reducer";
import AuthContainer from "../auth/AuthContainer";

const ContentContainer = (props) => {
  const [state, setState] = useState(null);
  let postData = () => {
    props.postData();
    setState(props.content.arrayData);
  };

  let setData = () => {
    props.getData();
  };

  useEffect(() => {
    setState(props.content.arrayData);
    setData();
  }, []);
  // debugger;
  // }
  // if (!props.isAuth)
  // <Redirect />

  return (
    <div>
      <Test
        isAuth={props.isAuth}
        content={props.content}
        getData={props.getData}
        postData={postData}
        setData={setData}
        deleteDataApi={props.deleteDataApi}
        updateDataApi={props.updateDataApi}
        addChangeText={props.addChangeText}
      />
    </div>
  );
};
// ContentContainer
const mapStateToProps = (state) => ({
  content: state.content,
  authData: state.auth,
});

// export default compose(
//   withAuthRedirect,
//   connect(mapStateToProps, {
//     getData,
//     postData,
//     deleteDataApi,
//     updateDataApi,
//     addChangeText,
//   })
// )(ContentContainer);
// let AuthRedirectComponent = (props) => {
// useEffect(() => {}, [props.authData]);
// let location = useLocation();

// console.log(`Auth header is: ${props.authData}`);
// useEffect(() => {
//   asr();
// }, [props.authData]);
// let asr = () => {
// if (!props.authData.isAuth) {
// debugger;
// return <AuthContainer />;
// return <Redirect />;
// return <Navigate to={"/login"} />;
// return <Navigate to={"/login"} />;
// }
// debugger;
// };

// if (!props.authData.isAuth) {
//   debugger;
//   return <Navigate to={"/login"} state={{ from: location }} />;
// }
// debugger;
//   return <ContentContainer {...props} />;
// };

export default compose(
  connect(mapStateToProps, {
    getData,
    postData,
    deleteDataApi,
    updateDataApi,
    addChangeText,
  }),
  withAuthRedirect
)(ContentContainer);
