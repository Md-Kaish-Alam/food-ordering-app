import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle asChild>
          <span>Welcome to Epicure !</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="w-full flex-1" asChild>
          <Button className="flex-1 font-bold bg-orange-500 text-white">
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
