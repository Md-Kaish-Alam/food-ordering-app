import { Link } from "react-router-dom";

import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";
import { EggFriedIcon } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-white fixed top-0 w-full shadow-md py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 flex gap-2 items-center justify-center"
        >
          <EggFriedIcon className="h-10 w-10 animate-spin" />
          Epicure
        </Link>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
