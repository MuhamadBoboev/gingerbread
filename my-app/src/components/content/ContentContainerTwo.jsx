import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Content from "./Content";
import { getData, postData } from "../../redux/content-reducer";
import Test from "./Test";

const ContentContainerTwo = (props) => {
  // props.getData();
  // debugger;
  // props.getData();
  const [state, setState] = useState(null);
  // debugger;
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
    // setState(props.content.arrayData);
    // debugger;
  }, []);

  // console.log("render");
  // console.log(props.content.arrayData);
  // if (let i =0; i <= props.content.arrayData.length; i++) {

  // }
  return (
    <div>
      <Content
        content={props.content}
        // getData={props.getData}
        postData={props.postData}
      />
      {/* <div>asdasd</div> */}
      {/* <Test
        content={props.content}
        postData={postData}
        setData={setData}
      /> */}
    </div>
  );
};
const mapStateToProps = (state) => ({ content: state.content });
export default connect(mapStateToProps, { getData, postData })(
  ContentContainerTwo
);
