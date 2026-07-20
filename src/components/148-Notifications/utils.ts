import { data } from "./data";
import { DataProp } from "./types";

export const filterNotifications = (filter: DataProp[], key: string, value: string) => {
  if (filter.length <= 0) return [];
  if (value === "all") return data;
  
  return data.filter((item: any) => {
    return item[key] === value;
  })
}
