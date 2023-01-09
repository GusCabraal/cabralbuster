import { createContext, ReactNode, useContext } from "react";
import { useQuery } from "react-query";
import { Category } from "../@types/category";
import { api } from "../axios/config";

interface CategoriesProviderProps {
  children: ReactNode;
}

interface CategoryContextData {
  categories: Category[] | undefined;
}

const CategoriesContext = createContext<CategoryContextData>({} as CategoryContextData);

export function CategoriesProvider({ children }: CategoriesProviderProps) {

  const { data: categories } = useQuery<Category[]>(
    "categories",
    async () => {
      return api.get("/categories").then((response) => response.data);
    },
    {
      staleTime: 1000 * 60, // 1 minuto,
    }
  );


  return (
    <CategoriesContext.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategories = () => {
  const context = useContext(CategoriesContext);
  return context;
};
