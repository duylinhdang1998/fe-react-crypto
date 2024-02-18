import { environment } from "~/utils/env";
import ConfigureAxios from "./fetchApi";
import { store } from "~/store/store";

const axiosConfig = new ConfigureAxios({
  configure: {
    method: "GET",
    baseURL: environment.BASE_URL,
    timeout: 30000,
  },
  setAccessToken() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const auth = store.getState().auth;
    return `Bearer ${auth?.token ?? ""}`;
  },
  setRefreshToken() {
    return "";
  },
});

const fetchAPI = axiosConfig.create();

axiosConfig.accessToken({
  setCondition(config) {
    return config?.url?.search(/^http/g) === -1;
  },
});

export default fetchAPI;
