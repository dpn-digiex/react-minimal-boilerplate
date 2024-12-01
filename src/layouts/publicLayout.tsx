import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <h1>HERE IS PUBLIC LAYOUT</h1>
      <h2>HEADER</h2>
      <Outlet />
      <h2>FOOTER</h2>
    </>
  );
};

export default PublicLayout;
