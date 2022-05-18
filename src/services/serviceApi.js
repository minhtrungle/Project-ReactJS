import axios from "axios";

async function serviceCallApi(endpoint, method, data = null, id = null) {
  const BASE_URL = "http://khanh.tokyo/api/";
  const url = id ? BASE_URL + endpoint + id : BASE_URL + endpoint;
  const result = await axios({
    method: method,
    url,
    data,
  });
  return result;
}
export default serviceCallApi;