import axios from "axios";
import { Employees } from "@/types/Employees";

const API_URL = import.meta.env.VITE_API_URL;

export const getEmployees = async (
  page: number
): Promise<Employees | undefined> => {
  try {
    const response = await axios.get<Employees>(`${API_URL}?page=${page}`);
    const data = response.data;
    console.log("DETTaA", API_URL);

    return data;
  } catch (error) {
    console.error("Error fetching employees:", error);
  }
};
