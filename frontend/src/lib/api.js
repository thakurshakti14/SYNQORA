import axios from "axios";

const WORKER_URL = process.env.REACT_APP_DEMO_WORKER_URL;

export const submitDemoRequest = async (payload) => {
  const { data } = await axios.post(`${WORKER_URL}/api/demo-requests`, payload);
  return data;
};
