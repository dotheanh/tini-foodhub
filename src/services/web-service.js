import { logResult, logError } from "../utils/logger";
export const getReq = async ({ url, query, auth }) => {
  let route = url;
  if (!!query) route = url + "?" + queryParamsURLEncodedString(query || {});

  console.log("🤙 request to:", route);

  return new Promise((resolve, reject) => {
    my.request({
      url: route,
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth && `bearer ${token}` ==> need update token here
      },
      method: "GET",
      success: (res) => {
        logResult(res);
        resolve(res);
      },
      fail: (err) => {
        logError(err);
        reject(err);
      },
    });
  });
};

export const postReq = async ({ url, data, auth }) => {
  console.log("🤙 request to:", url);
  console.log("🤙 data:", data);

  return new Promise((resolve, reject) => {
    my.request({
      url,
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth && `bearer ${token}` ==> need update token here
      },
      method: "POST",
      data,
      success: (res) => {
        console.log("🎯 result:", res);
        resolve(res);
      },
      fail: (err) => {
        console.log("🐛 error:", err);
        reject(err);
      },
    });
  });
};

export const putReq = async ({ url, data, auth }) => {
  console.log("🤙 request to:", url);
  console.log("🤙 data:", data);

  return new Promise((resolve, reject) => {
    my.request({
      url,
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth && `bearer ${token}` ==> need update token here
      },
      method: "PUT",
      data,
      success: (res) => {
        console.log("🎯 result:", res);
        resolve(res);
      },
      fail: (err) => {
        console.log("🐛 error:", err);
        reject(err);
      },
    });
  });
};

export const deleteReq = async ({ url, query, auth }) => {
  console.log("🤙 request to:", url);

  return new Promise((resolve, reject) => {
    my.request({
      url,
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth && `bearer ${token}` ==> need update token here
      },
      method: "DELETE",
      success: (res) => {
        console.log("🎯 result:", res);
        resolve(res);
      },
      fail: (err) => {
        console.log("🐛 error:", err);
        reject(err);
      },
    });
  });
};

export const queryParamsURLEncodedString = (params) => {
  return Object.keys(params)
    .map((k) =>
      Array.isArray(params[k])
        ? params[k]
            .map((p) => encodeURIComponent(k) + "=" + encodeURIComponent(p))
            .join("&")
        : params[k] instanceof Object
        ? Object.keys(params[k])
            .map((pk) => `${k}[${pk}]=${encodeURIComponent(params[k][pk])}`)
            .join("&")
        : encodeURIComponent(k) + "=" + encodeURIComponent(params[k])
    )
    .join("&");
};
