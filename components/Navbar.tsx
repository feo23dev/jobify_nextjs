import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between">
      <div>
        <LinksDropdown></LinksDropdown>
      </div>
      <div className="flex items-center gap-x-4">
        <ModeToggle></ModeToggle>
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </nav>
  );
};

export default Navbar;
