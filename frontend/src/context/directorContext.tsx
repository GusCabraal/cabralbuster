import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";
import { Director } from "../@types/director";
import { api } from "../axios/config";

interface DirectorsProviderProps {
  children: ReactNode;
}


interface DirectorsContextData {
  directors: Director[] | undefined;
}

const DirectorsContext = createContext<DirectorsContextData>({} as DirectorsContextData);

export function DirectorsProvider({ children }: DirectorsProviderProps) {

  const { data: directors } = useQuery<Director[]>(
    "directors",
    async () => {
      return api.get("/directors").then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto,
    }
  );


  return (
    <DirectorsContext.Provider
      value={{
        directors,
      }}
    >
      {children}
    </DirectorsContext.Provider>
  );
}

export const useDirectors = () => {
  const context = useContext(DirectorsContext);
  return context;
};
