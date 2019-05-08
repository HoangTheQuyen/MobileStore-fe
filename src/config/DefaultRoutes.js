const BASE_ROUTER = "http://localhost:3000/api/";
const BASE_ROOT = {
  PRODUCT: "product/"
};

export default {
  PRODUCT: {
    GET_ALL: BASE_ROUTER + BASE_ROOT.PRODUCT + "all",
    GET_ONE: BASE_ROUTER + BASE_ROOT.PRODUCT + "one",
    CREATE: BASE_ROUTER + BASE_ROOT.PRODUCT + "create",
    UPDATE: BASE_ROUTER + BASE_ROOT.PRODUCT + "update",
    REMOVE: BASE_ROUTER + BASE_ROOT.PRODUCT + "remove"
  }
};
