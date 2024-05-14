import Link from "next/link";
import Header from "./Header";
import Button from "./Button";
export default function Logout() {
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 px-2 py-1 flex flex-1 gap-4 overflow-auto max-lg:flex-col"></div>

      <div className="grid grid-cols-1 overflow-auto gap-4 w-full md:grid-cols-1 lg:grid-col-1 h-fit">
        <div className="  items-center justify-center gap-4 rounded-lg border p-4 shadow transition-colors hover:border-gray-300 ">
          <p className="line-clamp-1 w-full overflow-hidden text-center text-lg font-extrabold pb-4">
            Vous devez être connecté pour voir nos recettes :D
          </p>
          <Button
            variant="ghost"
            className="w-full overflow-hidden text-center justify-center text-lg font-extrabold pb-4"
          >
            <Link href="/api/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
