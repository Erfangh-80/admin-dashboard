import axios from "axios";

const Base_Url = "https://react-mini-projects-api.classbon.com";

export const httpServices = axios.create({
  baseURL: Base_Url,
});
