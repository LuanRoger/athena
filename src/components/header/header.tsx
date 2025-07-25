import NavLinks from "./nav-links";
import SearchBar from "./search-bar";
import UploadButton from "./upload-button";
import AvatarDropdown from "./avatar-dropdown";

export default function Header() {
  return (
    <div className="navbar bg-primary px-16 text-white shadow-sm">
      <div className="navbar-start gap-35">
        <NavLinks />
      </div>
      <div className="navbar-end gap-10">
        <SearchBar />
        <UploadButton />
        <AvatarDropdown />
      </div>
    </div>
  );
}
