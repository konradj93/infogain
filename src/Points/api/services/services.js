import apiClient from "../../../Common/api/apiClient";

const fetChPointsCollection = async () => {
  const response = await apiClient("/api/purchase");
  return response;
};
export default fetChPointsCollection;
