import ReactSvg from "../utils/ReactSvg";
import Button from "./Button";
import { User } from "lucide-react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import digitalichef from "../../public/digitalichef.jpg";
export default function Header() {
  const { user } = useUser();
  console.log(user);
  return (
    <header className="flex w-full items-center py-4">
      <h1 className="inline-flex items-center gap-2 text-lg font-bold">
        <Image
          src={digitalichef}
          width={50}
          height={50}
          alt="logo digitalifood"
          priority="high"
          fetchpriority="high"
        />
        <Link href="/">
          {" "}
          <span>DigitaliFood</span>
        </Link>
      </h1>
      <div className="flex gap-2 ml-auto">
        {user ? (
          <>
            <p className="inline-flex items-center  justify-center   px-3 py-1.5 ">
              Hello {user.nickname}
            </p>
            <Button variant="ghost">
              <Link href="/api/auth/logout"> Se déconnecter</Link>
            </Button>
          </>
        ) : (
          <Link href="/api/auth/login">
            {" "}
            <User size={24} />
          </Link>
        )}{" "}
      </div>
    </header>
  );
}
