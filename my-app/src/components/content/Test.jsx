import React, { useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import { contentAPI, gettingDataApi } from "../../api/api";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
const Test = (props) => {
  // console.log("render content");
  const [editMode, setEditMode] = useState(false);
  const [dataes, setDataes] = useState(props.content.arrayData);

  let editFnTrue = () => {
    setEditMode(true);
  };

  const { data, isSuccess } = useQuery(
    "getDataAPI",
    () => gettingDataApi.dataItems(),
    { keepPreviousData: true }
  );
  let editFnFalse = () => {
    setEditMode(false);
  };
  let deleteItem = (id) => {
    props.deleteDataApi(id);
  };
  let updateData = (id, el) => {
    let a = dataes.filter((item) => {
      if (item.id == el.id) {
        return { item };
      }
    });

    let indexItemData = dataes.findIndex((item) => {
      return item.id == id;
    });
    let updateItem = dataes.map((el) => {
      if (el.id == id) {
        return el;
      }
    });
    let newDataISO = new Date(updateItem[indexItemData].companySigDate);
    let newDataISO2 = new Date(updateItem[indexItemData].employeeSigDate);
    console.log(newDataISO.toString());
    props.updateDataApi(
      id,
      newDataISO.toISOString(),
      updateItem[indexItemData].companySignatureName,
      updateItem[indexItemData].documentName,
      updateItem[indexItemData].documentStatus,
      updateItem[indexItemData].documentType,
      updateItem[indexItemData].employeeNumber,
      newDataISO2.toISOString(),
      updateItem[indexItemData].employeeSignatureName
    );
  };

  const mutation = useMutation({
    mutationFn: () => contentAPI.addDataAPI(),
  });
  let newTextChange = (e, el) => {
    let currentTargetNew = e.currentTarget.value;
    props.addChangeText(currentTargetNew);
    let newData = () => {
      dataes.map((element) => {
        if (element.id == el.id) {
          const str = e.target.name;
          element[str] = currentTargetNew;
        }
      });
      return dataes;
    };
    setDataes(newData());
  };

  useEffect(() => {
    setDataes(props.content.arrayData);
  }, [props.content.arrayData]);
  let dateToString = (date) => {
    let dataTostring = new Date(date);
    return dataTostring.toString();
  };

  return (
    <div className="content__data">
      <div className="buttons">
        <div
          className="add-button"
          onClick={() => {
            mutation.mutate();
          }}
        >
          add data
        </div>
        <div className="add-button" onClick={props.setData}>
          get data
        </div>
      </div>
      <div></div>
      <ul>
        {!isSuccess ||
          data.map((el) => {
            return <li key={el.id}>{el.id}</li>;
          })}
      </ul>
      <ul className="items">
        {dataes.map((el) => {
          return (
            <li className="item" key={el.id}>
              {!editMode && (
                <div className="item__body">
                  <div className="item__info">
                    <div className="item__li">
                      <p> companySigDate </p>
                      <div>{dateToString(el.companySigDate)}</div>
                    </div>
                    <div className="item__li">
                      <p> companySignatureName</p>
                      <div>{el.companySignatureName}</div>
                    </div>
                    <div className="item__li">
                      <p> documentName</p>
                      <div>{el.documentName}</div>
                    </div>
                    <div className="item__li">
                      <p> documentStatus</p>
                      <div>{el.documentStatus}</div>
                    </div>
                    <div className="item__li">
                      <p> documentType</p>
                      <div>{el.documentType}</div>
                    </div>
                    <div className="item__li">
                      <p> employeeNumber</p>
                      <div>{el.employeeNumber}</div>
                    </div>
                    <div className="item__li">
                      <p> employeeSigDate </p>
                      <div>{dateToString(el.employeeSigDate)}</div>
                    </div>
                    <div className="item__li">
                      <p> employeeSignatureName</p>
                      <div>{el.employeeSignatureName}</div>
                    </div>
                    <div className="item__li">
                      <p> Id</p>
                      <div>{el.id}</div>
                    </div>
                    <div className="right"></div>
                  </div>
                  <div className="right__butttons">
                    <div onClick={editFnTrue} className="right__edit">
                      Edit
                    </div>
                    <div
                      onClick={() => {
                        deleteItem(el.id);
                      }}
                      className="right__remove"
                    >
                      Remove
                    </div>
                  </div>
                </div>
              )}
              {editMode && (
                <div className="item__body">
                  <div className="item__info" id={el.id}>
                    <div className="item__li">
                      <label>
                        companySigDate
                        <input
                          type="datetime-local"
                          name="companySigDate"
                          defaultValue={el.companySigDate}
                          onChange={(as) => {
                            newTextChange(as, el);
                            debugger;
                          }}
                        />
                      </label>
                    </div>

                    <div className="item__li">
                      <label>
                        companySignatureName
                        <input
                          type="text"
                          name="companySignatureName"
                          defaultValue={el.companySignatureName}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        documentName
                        <input
                          type="text"
                          name="documentName"
                          defaultValue={el.documentName}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        documentStatus
                        <input
                          type="text"
                          name="documentStatus"
                          defaultValue={el.documentStatus}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        documentType
                        <input
                          type="text"
                          name="documentType"
                          defaultValue={el.documentType}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        employeeNumber
                        <input
                          type="text"
                          name="employeeNumber"
                          defaultValue={el.employeeNumber}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        employeeSigDate
                        <input
                          type="datetime-local"
                          name="employeeSigDate"
                          defaultValue={el.employeeSigDate}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        employeeSignatureName
                        <input
                          type="text"
                          name="employeeSignatureName"
                          defaultValue={el.employeeSignatureName}
                          onChange={(as) => {
                            newTextChange(as, el);
                          }}
                        />
                      </label>
                    </div>
                    <div className="item__li">
                      <label>
                        Id
                        <input type="text" name="id" defaultValue={el.id} />
                      </label>
                    </div>
                    <div className="right"></div>
                  </div>
                  <div className="right__butttons">
                    <div onClick={editFnFalse} className="right__edit">
                      Cancel
                    </div>
                    <div
                      onClick={() => {
                        deleteItem(el.id);
                      }}
                      className="right__remove"
                    >
                      Remove
                    </div>
                    <div
                      onClick={() => {
                        updateData(el.id, el);
                      }}
                      className="right__update"
                    >
                      Update
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Test;
