import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/user-menu";

export const DesktopNav = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    <div className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UserMenu />
      ) : (
        <div className="w-full flex flex-1 justify-center items-center gap-x-4">
          <Button
            variant="ghost"
            className="font-bold text-orange-500 hover:text-orange-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            Login
          </Button>
          <Button
            className="font-bold text-white bg-orange-500 hover:text-white hover:bg-orange-600"
            onClick={async () => await loginWithRedirect()}
          >
            Register
          </Button>
        </div>
      )}
    </div>
  );
};
