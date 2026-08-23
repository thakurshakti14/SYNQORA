import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const api = axios.create({ baseURL: API });

export const submitDemoRequest = async (payload) => {
  const { data } = await api.post("/demo-requests", payload);
  return data;
};
