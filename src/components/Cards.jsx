import Button, { buttonVariants } from "./Button";
import Image from "next/image";
import { BookOpenText, PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Cards({ card }) {
  const router = useRouter();

  const handleCardClick = () => {
    const type = card.recipe.cuisineType;
    const calories = card.recipe.calories;
    const cautions = card.recipe.cautions;
    const diet = card.recipe.dietLabels;
    const ingredient = card.recipe.ingredientLines;
    console.log(card.recipe);
    router.push(
      `/recipe/${card.recipe.label}?type=${type}&ingredient=${ingredient}&calories=${calories}&cautions=${cautions}&diet=${diet}}`
    );
  };
  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 hover:bg-gray-100"
    >
      {/* On vérifie si card.recipe est défini avant d'accéder à ses propriétés */}
      {card.recipe && (
        <>
          <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold">
            {card.recipe.label}
          </p>
          <Image
            src={card.recipe.image}
            width={100}
            height={100}
            alt="image de la recette"
            priority="high"
            fetchpriority="high"
          />
          <div className="flex w-full items-center gap-2">
            <p className="line-clamp-1 text-start text-xs text-gray-400">
              {card.recipe.cuisineType}
            </p>
            <Link
              href="/"
              className={buttonVariants({
                variant: "secondary",
                className: "ml-auto",
              })}
            >
              <BookOpenText size={16} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
