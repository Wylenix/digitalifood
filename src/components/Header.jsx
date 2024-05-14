import ReactSvg from "../utils/ReactSvg";
import Button from "./Button";
import { User } from "lucide-react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Header() {
  const { user } = useUser();
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <ReactSvg size="40" />
        <Link href="/">
          {" "}
          <span>DigitaliFood</span>
        </Link>
      </h1>
      <div className="flex gap-2 ml-auto">
        {user ? (
          <Link href="/api/auth/logout">
            {" "}
            <User size={24} />
          </Link>
        ) : (
          <Link href="/api/auth/login">
            {" "}
            <User size={24} />
          </Link>
        )}{" "}
        <Button variant="ghost"></Button>
      </div>
    </header>
  );
}
