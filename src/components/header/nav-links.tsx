import { AthenaIconLight } from "@/components/icons/athena-icon-light";
export default function NavLinks() {
  return (
    <>
      <a className="link h-[50px] w-[50px]">
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
    </>
  );
}
