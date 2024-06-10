import { useQuery } from "react-query";
import { getAllCoffees } from "../utils/api.js";

const useCoffees = () => {
  const { data, isError, isLoading, refetchy } = useQuery(
    "allCoffees",
    getAllCoffees,
    { refetchOnWindowFocus: false }
  );
  return {
    data,
    isError,
    isLoading,
    refetchy,
  };
};

export default useCoffees;
