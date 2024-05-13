import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

const RecipeDetail = () => {
  const router = useRouter();
  const { recipeId, type, ingredient, diet, cautions, calories } = router.query;

  const newStr = ingredient?.replace(/,/g, " || ");

  const options = {
    breaks: true, // Active les sauts de ligne pour les virgules
  };
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 px-2 py-1 flex flex-1 gap-4 overflow-auto max-lg:flex-col"></div>
      <Link href="/" className="flex rounded-md hover:bg-sky-200 pt-2 pl-2">
        <CircleArrowLeft size={22} />
        <span className="pl-2 pb-2">Back</span>
      </Link>
      <div className="grid grid-cols-1 overflow-auto gap-4 w-full md:grid-cols-1 lg:grid-col-1 h-fit">
        <div className="  items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 ">
          <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold pb-4">
            {recipeId}
          </p>

          <div className="flex w-full items-center gap-2 pb-2">
            <p className="text-start text-gray-500">
              <span className="font-bold">Le type de cuisine :</span> {type}
            </p>
          </div>
          <div className="flex w-full items-center gap-2 pb-2">
            <p className="text-start text-gray-500">
              <span className="font-bold">Le label diététique :</span> {diet}
            </p>
          </div>
          <div className="flex w-full items-center gap-2 pb-2">
            <p className="text-start text-gray-500">
              <span className="font-bold">Mise en garde alimentaire :</span>{" "}
              {cautions}
            </p>
          </div>
          <div className="flex w-full items-center gap-2 pb-2">
            <p className="text-start text-gray-500">
              <span className="font-bold">
                Les ingrédients nécessaires à la recette :
              </span>{" "}
              {newStr ? newStr : ingredient}
            </p>
          </div>
          <div className="flex w-full items-center gap-2 pb-2">
            <p className="text-start text-gray-500">
              <span className="font-bold">Les calories de la recette :</span>{" "}
              {Math.floor(calories)} kc
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetail;
