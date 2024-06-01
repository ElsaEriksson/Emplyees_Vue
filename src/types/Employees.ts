import { Employee } from "@/types/Employee";

export interface Employees {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Employee[];
  support: {};
}
