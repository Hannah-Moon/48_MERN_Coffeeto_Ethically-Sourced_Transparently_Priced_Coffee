import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/coffeetoAPI",
});

export const getAllCoffees = async () => {
  try {
    const response = await api.get("/allcoffees", { timeout: 10 * 1000 });
    if (response.status === 400 || response.status === 500) {
      throw new Error(response.data);
    }
    return response.data;
  } catch (error) {
    alert("Can't pull data from backend");
    throw error;
  }
};
