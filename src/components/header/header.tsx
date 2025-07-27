import { getSession } from "@/app/actions/auth";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";
import UploadButton from "./upload-button";
import AvatarDropdown from "./avatar-dropdown";
import MenuButton from "./menu-button";

export default async function Header() {
  const currentUser = await getSession();
  const isLoggedIn = !!currentUser;

  return (
    <div className="navbar bg-primary px-4 py-2 text-white shadow-sm sm:px-16">
      <div className="navbar-start flex items-center">
        <MenuButton />
        <NavLinks />
      </div>
      <div className="navbar-end flex items-center gap-2 sm:gap-10">
        <SearchBar />
        {isLoggedIn && <UploadButton />}
        {isLoggedIn && <AvatarDropdown />}
      </div>
    </div>
  );
}
