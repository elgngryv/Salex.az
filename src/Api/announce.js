// import axiosInstance from "./temp-axios-auth";
import axios from "axios";

// const API_BASE_URL = import.meta.env.VITE_BASE_URL;

// Send Announce (POST)
export const sendAnnounce = async (data) => {
  try {
    const response = await axios.post(
      `http://selnaz.com:9099/announce/send`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error sending announce:", error);
    throw error;
  }
};

// Get Announce (GET)
export const getAnnounce = async () => {
  try {
    const response = await axios.get(`http://selnaz.com:9099/announce/get`);
    return response.data;
  } catch (error) {
    console.error("Error fetching announce:", error);
    throw error;
  }
};
