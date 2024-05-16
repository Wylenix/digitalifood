import { useState } from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
const Menu = ({
  filters,
  currentFilter,
  onFilterChange,
  filteredRecipes,
  caloriesRange,
  setCaloriesRange,
  maxCalories,
}) => {
  const handleSliderChange = (event, newValue) => {
    setCaloriesRange(newValue);
  };
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <button
        key="all"
        className={`text-left rounded-md px-2 py-1 transition-colors hover:bg-sky-200 capitalize`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`text-left rounded-md px-2 py-1 transition-colors hover:bg-sky-200 capitalize ${
            filter === currentFilter ? "font-bold" : ""
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
      <div className="my-4 border-t-2 pt-2 pl-1">
        <Typography gutterBottom>
          Calories entre {caloriesRange[0]} et {Math.floor(caloriesRange[1])}
        </Typography>
        <Slider
          min={0}
          max={maxCalories} // Utiliser la variable maxCalories
          value={caloriesRange}
          onChange={handleSliderChange}
          marks // Optionnel pour afficher des marqueurs sur le curseur
          step={100} // Optionnel pour définir l'incrément du curseur
          // Optionnel pour afficher la valeur courante
          getAriaLabel={() => "Calories range"}
          valueLabelDisplay="auto"
        />
      </div>
    </nav>
  );
};

export default Menu;
