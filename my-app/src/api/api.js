import axios from "axios";

export const authApi = {
  getUsers(username, password) {
    return axios
      .post(
        "https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login",
        {
          username: `${username}`,
          password: `${password}`,
        },
        {
          headers: {
            "x-auth": "supersecrettoken_for_Student",
          },
        }
      )
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const contentAPI = {
  getData() {
    return axios.get(
      "https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/get",
      {
        // withCredentials: true,
        headers: {
          "x-auth": "supersecrettoken_for_Student",
        },
      }
    );
    // .then((sss) => {
    //   console.log(sss);
    // });
  },
  postData() {
    return axios.post(
      `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/create`,
      {
        documentName: "Новый докумен",
        documentStatus: "Подписан",
      },
      {
        headers: {
          "x-auth": "supersecrettoken_for_Student",
        },
      }
    );
  },
  updateDat() {
    return axios.post(
      `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/373cad08-63ea-4e38-9258-b78ff32efde8`,
      {
        documentName: "фыыыы",
        documentStatus: "Подписан",
      },
      {
        headers: {
          "x-auth": "supersecrettoken_for_Student",
        },
      }
    );
  },
  removeApi(id) {
    return axios.post(
      `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
      {
        documentStatus: "Подписан",
      },
      {
        headers: {
          "x-auth": "supersecrettoken_for_Student",
        },
      }
    );
  },
  updateApi(
    id,
    companySigDate,
    companySignatureName,
    documentName,
    documentStatus,
    documentType,
    employeeNumber,
    employeeSigDate,
    employeeSignatureName
  ) {
    return axios.post(
      `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
      {
        companySigDate,
        companySignatureName,
        documentName,
        documentStatus,
        documentType,

        employeeNumber,
        employeeSigDate,
        employeeSignatureName,
      },
      {
        headers: {
          "x-auth": "supersecrettoken_for_Student",
        },
      }
    );
  },
};
{
  /* <div>{el.companySigDate}</div>
                  <div>{el.companySignatureName}</div>
                  <div>{el.documentName}</div>
                  <div>{el.documentType}</div>
                  <div>{el.employeeNumber}</div>
                  <div>{el.employeeSigDate}</div>
                  <div>{el.employeeSignatureName}</div>
                  <div>{el.id}</div> */
}
