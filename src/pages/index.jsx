import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import { useUser } from "@auth0/nextjs-auth0/client";
import Logout from "../components/Logout";
import Charts from "../components/Charts";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function Products() {
  const { recipes, isLoading, filters, maxCalories } = useFetchRecipes();
  const [currentFilter, setCurrentFilter] = useState(null);
  const { user, error, isLoadingApp } = useUser();
  const [searchQuery, setSearchQuery] = useState("");
  const [caloriesRange, setCaloriesRange] = useState([0, 2065]);

  if (isLoadingApp) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredRecipes = currentFilter
    ? recipes.filter((recipe) => {
        const searchText = recipe.recipe.label.toLowerCase();
        return (
          searchText.includes(searchQuery) &&
          recipe.recipe.cuisineType.includes(currentFilter) &&
          recipe.recipe.calories >= caloriesRange[0] &&
          recipe.recipe.calories <= caloriesRange[1]
        );
      })
    : recipes.filter((recipe) => {
        const searchText = recipe.recipe.label.toLowerCase();
        return (
          searchText.includes(searchQuery) &&
          recipe.recipe.calories >= caloriesRange[0] &&
          recipe.recipe.calories <= caloriesRange[1]
        );
      });

  const handleFilterChange = (filter) => {
    if (filter === "all") {
      setCurrentFilter(null);
    } else {
      setCurrentFilter(filter);
    }
  };

  if (user) {
    return (
      <main className="m-auto flex h-full max-w-8xl flex-col px-4">
        <Header />
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
        <div className="mb-4 mt-4 px-2 py-1 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <Menu
                filters={filters}
                currentFilter={currentFilter}
                onFilterChange={handleFilterChange}
                filteredRecipes={filteredRecipes}
                caloriesRange={caloriesRange}
                setCaloriesRange={setCaloriesRange}
                maxCalories={maxCalories}
              />
              <div className="grid grid-cols-1 overflow-auto gap-4 w-full md:grid-cols-2 h-fit">
                {filteredRecipes.map((card, index) => (
                  <Cards
                    card={card}
                    key={card.recipe.label}
                    onClick={() => handleCardClick(card)}
                  />
                ))}
              </div>
              <div className="grid grid-cols-1 overflow-auto gap-4 w-[75%] h-fit">
                <Charts filter={filteredRecipes} />
              </div>
            </>
          )}
        </div>
      </main>
    );
  }
  return <Logout />;
}
