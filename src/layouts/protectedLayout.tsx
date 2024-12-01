import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import LoginPage from "@pages/login";

const ProtectedRoutes = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    protectedRouter();
  }, []);

  const protectedRouter = () => {
    setIsSignedIn(false);
  };

  return !isSignedIn ? (
    <LoginPage />
  ) : (
    <>
      <h1>HERE IS PROTECTED LAYOUT</h1>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
