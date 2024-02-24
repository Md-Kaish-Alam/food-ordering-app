import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <div className="w-full flex flex-1 justify-center items-center gap-x-4">
      <Button
        variant="ghost"
        className="font-bold text-orange-500 hover:text-orange-500 hover:bg-white"
      >
        <Link to="/login">Login</Link>
      </Button>
      <Button className="font-bold text-white bg-orange-500 hover:text-white hover:bg-orange-600">
        <Link to="/signup">Register</Link>
      </Button>
    </div>
  );
};
