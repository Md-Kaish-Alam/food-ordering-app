import { CircleUserRound, Menu } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MobileNavLinks } from "@/components/mobile-nav-links";

export const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle asChild>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to Epicure !</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="w-full flex flex-col gap-4" asChild>
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              className="flex font-bold bg-orange-500 text-white"
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
