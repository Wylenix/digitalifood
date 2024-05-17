// hooks/useFetchRecipes.js
import { useState, useEffect } from "react";
import axios from "axios";

const APP_ID = "7248fed2";
const APP_KEY = "7d091d263de5ba4f3bce3eb74fa719f0";

export default function useFetchRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);
  const [maxCalories, setMaxCalories] = useState(2065);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
    };

    const options = {
      method: "GET",
      url: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${APP_ID}&app_key=${APP_KEY}&cuisineType=American&cuisineType=French&cuisineType=Indian&cuisineType=Italian&imageSize=LARGE`,
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
        if (recipeData.length > 0) {
          const maxCal = Math.max(
            ...recipeData.map((recipe) => recipe.recipe.calories)
          );
          setMaxCalories(maxCal);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return { recipes, isLoading, filters, maxCalories };
}
