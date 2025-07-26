import { AthenaIconLight } from "@/components/icons/athena-icon-light";

export default function NavLinks() {
  return (
    <div className="flex gap-20">
      <a className="link mr-4 h-[50px] w-[50px] lg:mr-1">
        <AthenaIconLight />
      </a>
      <div className="ml-1 hidden lg:flex">
        <ul className="menu menu-horizontal gap-20 px-1 font-semibold text-white">
          <li>
            <a>Início</a>
          </li>
          <li>
            <a>Categorias</a>
          </li>
          <li>
            <a>Sobre</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
