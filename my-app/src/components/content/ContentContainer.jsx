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
import { contentAPI } from "../../api/api";

const ContentContainer = (props) => {
  const [state, setState] = useState(null);
  let postData = () => {
    props.postData();
    setState(props.content.arrayData);
  };

  let setData = () => {
    props.getData();
  };

  // let deleteDataItem = (id) => {
  //   deleteDataItem(id);
  // };
  useEffect(() => {
    setState(props.content.arrayData);
    setData();
  }, []);

  // }
  return (
    <div>
      <Test
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
const mapStateToProps = (state) => ({ content: state.content });
export default connect(mapStateToProps, {
  getData,
  postData,
  deleteDataApi,
  updateDataApi,
  addChangeText,
})(ContentContainer);
