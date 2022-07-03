import serviceCallApi from "../services/serviceApi";

async function listProduct() {
  try {
    const result = await serviceCallApi("products?page=1&limit=10&id=2", "GET");
    return result;
  } catch (error) {
    return error;
  }
}
export { listProduct };
