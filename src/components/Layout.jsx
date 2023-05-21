import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <header>
        <p>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Tweets
        </p>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
