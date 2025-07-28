import { getSession } from "@/app/actions/auth";
import NavLinks from "./nav-links";
import SearchBar from "./search-bar";
import UploadButton from "./upload-button";
import AvatarDropdown from "./avatar-dropdown";
import MenuButton from "./menu-button";
import { cn } from "@/utils/tailwind";
import LoginButtonField from "./login-button-field";

export default async function Header() {
  const currentUser = await getSession();
  const isUserLogged = currentUser !== null;
  cn();

  return (
    <div
      className={cn(
        "navbar bg-primary px-4 py-2 text-white shadow-sm sm:px-16",
        isUserLogged ? "bg-primary" : "bg-transparent",
      )}
    >
      <div className="navbar-start flex items-center">
        <MenuButton isLoggedIn={isUserLogged} />
        <NavLinks isLoggedIn={isUserLogged} />
      </div>
      <div className="navbar-end flex items-center gap-2 sm:gap-10">
        <SearchBar isLoggedIn={isUserLogged} />
        {isUserLogged ? (
          <>
            <UploadButton />
            <AvatarDropdown />
          </>
        ) : (
          <LoginButtonField />
        )}
      </div>
    </div>
  );
}
