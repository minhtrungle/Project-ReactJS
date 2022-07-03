import axios from "axios";

async function serviceCallApi(
  endpoint,
  method,
  data = null,
  id = null,
  token = null
) {
  const BASE_URL = "http://khanh.tokyo/api/";
  // const BASE_URL = "http://127.0.0.1:8000/api/";
  const config = {
    method: method,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : null,
    },
    baseURL: BASE_URL,
    url: id ? BASE_URL + endpoint + id : BASE_URL + endpoint,
    data: data,
  };
  const result = await axios(config);
  return result.data;
}
export default serviceCallApi;
