import { useEffect, useState } from "react";
import { fetChPointsCollection } from "../../api/services/services";
import groupElementsByDate from "../../logic/groupElementsByDate/groupElementsByDate";

const useCollectPoints = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [purchases, setPurchase] = useState(null);
  const fetchPurchases = async () => {
    setIsLoading(true);
    try {
      const response = await fetChPointsCollection();
      setPurchase(groupElementsByDate(response));
    } catch (err) {
      throw new Error("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPurchases();
  }, []);

  return {
    purchases,
    isLoading,
  };
};

export default useCollectPoints;
