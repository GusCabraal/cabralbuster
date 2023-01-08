import { useMovies } from "../context/movieContext";

interface SelectCategoryProps {
  handleSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

export function SelectCategory({
  handleSelectedCategory,
  selectedCategory,
}: SelectCategoryProps) {
  const { categories } = useMovies();
  return (
    <label className="px-10 mx-20 text-lg">
      <span className="text-white">Categoria:</span>
      <select
        value={selectedCategory}
        onChange={({ target: { value } }) => handleSelectedCategory(value)}
        className="ml-3 "
      >
        <option value="Selecione">Selecione</option>
        {categories?.map(({ name, id }) => (
          <option value={name} key={id}>
            {name}
          </option>
        ))}
      </select>
    </label>
  );
}
