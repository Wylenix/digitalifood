import ReactSvg from "../utils/ReactSvg";
import Button from "./Button";
import { User } from "lucide-react";
import Link from "next/link";
export default function Header() {
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
        <Button variant="ghost">
          <Link href="/login">
            {" "}
            <User size={24} />
          </Link>
        </Button>
      </div>
    </header>
  );
}
