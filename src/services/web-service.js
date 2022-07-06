export const getReq = async ({ url, query, auth }) => {
  let params, route = url;
  if (!!query)
    route = url + "?" + queryParamsURLEncodedString(query || {});

  console.log("🤙 request to:", route);

  return new Promise((resolve, reject) => {
    my.request({
      url: route,
      headers: {
        "Content-Type": "application/json",
        // Authorization: auth && `Basic ${base64.encode(basicAuth)}` ==> need update token here
      },
      method: "GET",
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
