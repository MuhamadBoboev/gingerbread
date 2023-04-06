// import {
//   randomCreatedDate,
//   randomId,
//   randomTraderName,
//   randomUpdatedDate,
// } from "@mui/x-data-grid-generator";
import { contentAPI } from "../api/api";

const ADD_DATA = "ADD_DATA";
const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
const DELETE_DATA = "DELETE_DATA";
const UPDATE_DATA = "UPDATE_DATA";
const NEW_CHANGE_TEXT = "NEW_CHANGE_TEXT";
const initialState = {
  arrayData: [
    // {
    //   companySigDate: "",
    //   companySignatureName: "",
    //   documentName: "",
    //   documentStatus: "",
    //   documentType: "",
    //   employeeNumber: "",
    //   employeeSigDate: "",
    //   employeeSignatureName: "",
    //   id: "",
    // },
    // {
    //   id: randomId(),
    //   name: randomTraderName(),
    //   age: 25,
    //   dateCreated: randomCreatedDate(),
    //   lastLogin: randomUpdatedDate(),
    // },
  ],
  // initialRows: [
  //   {
  //     id: randomId(),
  //     name: randomTraderName(),
  //     age: 25,
  //     dateCreated: randomCreatedDate(),
  //     lastLogin: randomUpdatedDate(),
  //   },
  //   {
  //     id: randomId(),
  //     name: randomTraderName(),
  //     age: 99,
  //     dateCreated: randomCreatedDate(),
  //     lastLogin: randomUpdatedDate(),
  //   },
  //   {
  //     id: randomId(),
  //     name: randomTraderName(),
  //     age: 66,
  //     dateCreated: randomCreatedDate(),
  //     lastLogin: randomUpdatedDate(),
  //   },
  // ],
  newChangeText: "",
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA: {
      return {
        ...state,
        arrayData: [...action.newElement],
      };
    }
    case ADD_NEW_ELEMENT: {
      state.arrayData.push(action.newElement);
      return {
        ...state,
      };
    }
    case DELETE_DATA: {
      let idFilter = state.arrayData.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        arrayData: idFilter,
      };
    }
    case UPDATE_DATA:
      // debugger
      return {
        ...state,
        arrayData: state.arrayData.map((el) => {
          // debugger;
          if (el.id == action.id) {
            // debugger;
            return {
              ...el,
              companySigDate: action.companySigDate,
              companySignatureName: action.companySignatureName,
              documentName: action.documentName,
              documentStatus: action.documentStatus,
              documentType: action.documentType,
              employeeNumber: action.employeeNumber,
              employeeSigDate: action.employeeSigDate,
              employeeSignatureNam: action.employeeSignatureName,
            };
          } else {
            return el;
          }
        }),
        // companySigDate: action.companySigDate,
        // companySignatureName: action.companySigDate,
        // documentName: action.companySigDate,
        // documentStatus: action.companySigDate,
        // documentType: action.companySigDate,
        // employeeNumber: action.companySigDate,
        // employeeSigDate: action.companySigDate,
        // employeeSignatureNam: action.companySigDatee,
      };
    case NEW_CHANGE_TEXT:
      // debugger;
      return { ...state, newChangeText: action.text };
    default:
      return state;
  }
};
export const addApi = (newElement) => ({
  type: ADD_DATA,
  newElement,
});
export const addNewElement = (newElement) => ({
  type: ADD_NEW_ELEMENT,
  newElement,
});
export const addChangeText = (text) => ({ type: NEW_CHANGE_TEXT, text });

export const deleteDataItem = (id) => ({ type: DELETE_DATA, id });
export const updateData = (
  id,
  companySigDate,
  companySignatureName,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName
) => ({
  type: UPDATE_DATA,
  id,
  companySigDate,
  companySignatureName,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName,
});
export const getData = () => {
  return (dispatch) => {
    contentAPI.getData().then((response) => {
      dispatch(addApi(response.data.data));
    });
  };
};
export const postData = () => {
  return (dispatch) => {
    contentAPI.postData().then((response) => {
      dispatch(addNewElement(response.data.data));
    });
  };
};

export const deleteDataApi = (id) => {
  return (dispatch) => {
    contentAPI.removeApi(id).then(() => {
      // console.log("delete");
      dispatch(deleteDataItem(id));
    });
  };
};

export const updateDataApi = (
  id,
  companySigDate,
  companySignatureName,
  documentName,
  documentStatus,
  documentType,
  employeeNumber,
  employeeSigDate,
  employeeSignatureName
) => {
  return (dispatch) => {
    contentAPI
      .updateApi(
        id,
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,
        employeeNumber,
        employeeSigDate,
        employeeSignatureName
      )
      .then((response) => {
        console.log("update");

        dispatch(
          updateData(
            id,
            companySigDate,
            companySignatureName,
            documentName,
            documentStatus,
            documentType,
            employeeNumber,
            employeeSigDate,
            employeeSignatureName
          )
        );
      });
  };
};

export default contentReducer;
