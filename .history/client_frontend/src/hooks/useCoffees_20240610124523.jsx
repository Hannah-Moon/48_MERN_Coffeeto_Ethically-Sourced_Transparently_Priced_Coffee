import { useQuery } from "react-query";

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
