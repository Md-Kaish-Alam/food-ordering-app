import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export const DesktopNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-full flex flex-1 justify-center items-center gap-x-4">
      <Button
        variant="ghost"
        className="font-bold text-orange-500 hover:text-orange-500 hover:bg-white"
        onClick={async() => await loginWithRedirect()}
      >
        Login
      </Button>
      <Button className="font-bold text-white bg-orange-500 hover:text-white hover:bg-orange-600">
        <Link to="/signup">Register</Link>
      </Button>
    </div>
  );
};
