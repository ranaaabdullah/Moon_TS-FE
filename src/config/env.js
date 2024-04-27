import { create } from "apisauce";
// import authConfigKey from '../configs/auth'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const client = create({
  baseURL,
});

client.addAsyncRequestTransform(async (request) => {
  // const token = localStorage.getItem(authConfigKey.storageTokenKeyName)
  // request.headers['Authorization'] = `Bearer ${token}`
});

export const config = async () => {
  // const token = localStorage.getItem(authConfigKey.storageTokenKeyName)
  return {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
};

export const authConfig = async (token) => {
  return {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
};
export const withOutAuthConfig = async (token) => {
  return {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  };
};

export const multipartConfig = async () => {
  // const token = localStorage.getItem(authConfigKey.storageTokenKeyName)
  return {
    headers: {
      // Authorization: `Bearer ${token}`,
      Accept: "multipart/form-data",
    },
  };
};

// const responseMonitor = (response) => {
//   if (response.status === 401) {
//     localStorage.clear();
//     showErrorMessage("NotAuthorized");
//     window.location.href = "/";
//   }
// };

// client.addMonitor(responseMonitor);

export default client;
