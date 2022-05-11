import axios from "axios";

async function serviceCallApi(endpoint, method, data = null, id = null) {
  const url = id ? endpoint + id : endpoint;
  const result = await axios({
    method: method,
    url,
    data,
  });
  return result;
}
export default serviceCallApi;