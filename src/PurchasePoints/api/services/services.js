import apiClient from "../../../Common/api/apiClient";
import { mappPurchaseDateStringToDate } from "../mappers/mappers";

export const fetChPointsCollection = async () => {
  const response = await apiClient("/api/purchase");
  return mappPurchaseDateStringToDate(response);
};
