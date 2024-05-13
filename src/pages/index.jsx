"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Cards from "../components/Cards";
import axios from "axios";

import Skeleton from "@mui/material/Skeleton";

const APP_ID = "7248fed2";
const APP_KEY = "7d091d263de5ba4f3bce3eb74fa719f0";

export default function Products({ searchParams }) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); // Convert search terms to lowercase for case-insensitive search
  };

  const filteredRecipes = currentFilter
    ? recipes.filter((recipe) => {
        const searchText = recipe.recipe.label.toLowerCase(); // Convert recipe label to lowercase for case-insensitive search
        return (
          searchText.includes(searchQuery) &&
          recipe.recipe.cuisineType.includes(currentFilter)
        );
      })
    : recipes.filter((recipe) => {
        const searchText = recipe.recipe.label.toLowerCase();
        return searchText.includes(searchQuery);
      });

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = {
      method: "GET",
      url: "https://api.edamam.com/api/recipes/v2?type=public&app_id=7248fed2&app_key=7d091d263de5ba4f3bce3eb74fa719f0&cuisineType=American&cuisineType=French&cuisineType=Indian&cuisineType=Italian&imageSize=LARGE",
      headers: headers,
    };

    axios(options)
      .then((response) => {
        const recipeData = response.data.hits;

        setRecipes(recipeData);
        setIsLoading(false);
        const allCategories = recipeData.flatMap(
          (recipe) => recipe.recipe.cuisineType
        );
        const filters = [...new Set(allCategories)];

        setFilters(filters);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);
  const handleFilterChange = (filter) => {
    if (filter === "all") {
      setCurrentFilter(null);
    } else {
      setCurrentFilter(filter);
    }
  };

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <input
        type="text"
        placeholder="Rechercher une recette"
        className="mt-8 rounded-md px-2 py-1 border border-gray-300 focus:outline-none focus:border-gray-500"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <div className="mb-4 mt-4 px-2 py-1 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        {isLoading ? (
          <div className="grid grid-cols-4 overflow-auto gap-4 w-full md:grid-cols-4 lg:grid-col-6 h-fit">
            <Skeleton
              animation="wave"
              variant="text"
              sx={{ fontSize: "1rem" }}
            />

            <Skeleton
              animation="wave"
              variant="rectangular"
              width={210}
              height={60}
            />
            <Skeleton
              animation="wave"
              variant="rounded"
              width={210}
              height={60}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={210}
              height={60}
            />
          </div>
        ) : (
          <>
            <Menu
              filters={filters}
              currentFilter={currentFilter}
              onFilterChange={handleFilterChange}
            />

            <div className="grid grid-cols-1 overflow-auto gap-4 w-full md:grid-cols-2 lg:grid-col-3 h-fit">
              {filteredRecipes.map((card, index) => (
                <Cards
                  card={card}
                  key={card.recipe.label}
                  onClick={() => handleCardClick(card)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
