import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "8px 0",
    marginBottom: "16px",
    borderBottom: "1px solid #471ca9",
  },
  link: {
    padding: "8px 16px",
    borderRadius: "4px",
    textDecoration: "none",
    color: "#471ca9",
    fontWeight: 500,
  },
};

export const Layout = () => {
  return (
    <div>
      <header style={styles.header}>
        <p>Tweeter</p>
        <nav>
          <NavLink style={styles.link} to="/" end>
            Home
          </NavLink>
          <NavLink style={styles.link} to="/tweets">
            Tweets
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
