import { useEffect, useRef } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { useCreateUser } from "@/api/user-api";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const { createUser } = useCreateUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email, name: user.name });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <>Loading...</>;
};

export default AuthCallbackPage;
