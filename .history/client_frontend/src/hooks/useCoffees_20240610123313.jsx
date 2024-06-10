import { useQuery } from "react-query";

const useCoffees = () => {
  const { data, isError, isLoading, refetchy } = useQuery({
    queryKey: "allProperties",
  });
  return {
    data,
    isError,
    isLoading,
    refetchy,
  };
};

export default useCoffees;
