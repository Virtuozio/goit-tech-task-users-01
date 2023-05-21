import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import UserList from "../components/UserList/UserList";

const styles = {
  link: {
    marginRight: "400px",
    display: "inlineFlex",
    padding: "8px 0",
    color: "#471ca9",
    textDecoration: "none",
    fontWeight: 500,
    textTransform: "uppercase",
  },
};
const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";

  return (
    <main>
      <Link style={styles.link} to={backLinkHref}>
        🔙back to home
      </Link>
      <UserList />
    </main>
  );
};

export default Tweets;
