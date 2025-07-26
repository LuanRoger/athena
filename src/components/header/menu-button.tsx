import { Menu } from "lucide-react";

export default function MenuButton() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Menu size={28} />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow"
      >
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
  );
}
