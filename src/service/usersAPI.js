import axios from "axios";
axios.defaults.baseURL = "https://64589d2b4eb3f674df785f5c.mockapi.io";

export const getUsers = async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const incrementFollowers = async (user) => {
  try {
    const response = await axios.put(`/tasks/${user.id}`, {
      followers: followers + 1,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
