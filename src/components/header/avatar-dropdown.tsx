export default function AvatarDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="border-secondary w-10 rounded-full border">
          <img
            alt="Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow"
      >
        <li>
          <a>Informações da conta</a>
        </li>
        <li>
          <a>Minhas contribuições</a>
        </li>
        <li>
          <a>Tema</a>
        </li>
        <li>
          <a>Sair</a>
        </li>
      </ul>
    </div>
  );
}
