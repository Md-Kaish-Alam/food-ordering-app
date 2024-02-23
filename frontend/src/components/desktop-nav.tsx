import { Button } from "@/components/ui/button";

export const DesktopNav = () => {
  return (
    <div className="w-full flex flex-1 justify-center items-center gap-x-4">
      <Button
        variant="ghost"
        className="font-bold text-orange-500 hover:text-orange-500 hover:bg-white"
      >
        Login
      </Button>
      <Button className="font-bold text-white bg-orange-500 hover:text-white hover:bg-orange-600">
        Register
      </Button>
    </div>
  );
};
