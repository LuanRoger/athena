import { cn } from "@/utils/tailwind";
import Image from "next/image";

interface NavLinksProps {
  isLoggedIn?: boolean;
}

export default function NavLinks({ isLoggedIn }: NavLinksProps) {
  return (
    <div className="flex gap-20">
      <a href="/" className="link mr-4 h-[50px] w-[50px] lg:mr-1">
        <Image
          src={`/assets/athena-${isLoggedIn ? "neutral" : "primary"}.png`}
          alt="Logo da Athena"
          className="w-12"
          width={50}
          height={50}
        />
      </a>
      <div className="ml-1 hidden lg:flex">
        <ul
          className={cn(
            "menu menu-horizontal gap-20 px-1 font-semibold",
            isLoggedIn ? "text-white" : "text-primary",
          )}
        >
          <li>
            <a href="/dashboard">Início</a>
          </li>
          <li>
            <a href="#categories">Categorias</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
