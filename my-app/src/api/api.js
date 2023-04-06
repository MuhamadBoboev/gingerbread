import axios from "axios";
// const
const instanse = axios.create({
  // withCredentials: true,
  headers: {
    "x-auth": "supersecrettoken_for_Student",
  },
  baseURL: "https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/",
});
export const authApi = {
  authMeApi(login, password) {
    return axios.post(
      `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/login`,
      {
        login: `user${login}`,
        password,
        // login: "user123879",
        // password: "password",
      }
      // {
      // headers: {
      // "x-auth": "supersecrettoken_for_Student",
      // },
      // }
    );
  },
};

export const gettingDataApi = {
  async dataItems() {
    const { data } = await instanse.get("userdocs/get");

    // console.log(data);
    return data.data;
  },
};
export const contentAPI = {
  getData() {
    return instanse.get("userdocs/get", {
      // headers: {
      //   "x-auth": "supersecrettoken_for_Student",
      // },
    });
  },
  postData() {
    return instanse.post(`userdocs/create`, {
      documentName: "Новый докумен",
      documentStatus: "Подписан",
    });
  },
  async addDataAPI() {
    await instanse.post(`userdocs/create`, {
      documentName: "Новый докумен",
      documentStatus: "Подписан",
    });
  },

  // updateDat() {
  //   return axios.post(
  //     `https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs/set/373cad08-63ea-4e38-9258-b78ff32efde8`,
  //     {
  //       documentName: "фыыыы",
  //       documentStatus: "Подписан",
  //     },
  //     {
  //       headers: {
  //         "x-auth": "supersecrettoken_for_Student",
  //       },
  //     }
  //   );
  // },
  removeApi(id) {
    return instanse.post(
      `userdocs/delete/${id}`,
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
    return instanse.post(
      `userdocs/set/${id}`,
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
// "x-auth": "supersecrettoken_for_Student",
