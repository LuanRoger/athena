import { getSession } from "@/app/actions/auth";
import SignOutButton from "../sign-out-button";
import Link from "next/link";

export default async function AvatarDropdown() {
  const currentUser = await getSession();

  if (!currentUser) {
    return null;
  }

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
            width={40}
            height={40}
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-black shadow"
      >
        <li className="text-center">
          <Link
            className="block w-full py-3 text-center font-semibold"
            href="/me/profile"
          >
            Minhas Contribuições
          </Link>
        </li>
        <li className="text-center">
          <a className="block w-full py-3 text-center font-semibold">Conta</a>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}
