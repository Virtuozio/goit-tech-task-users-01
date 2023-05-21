import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink";
import UserList from "../components/UsersList/UsersList";
const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/home";

  return (
    <main>
      <BackLink to={backLinkHref}>back</BackLink>
      <UserList />
    </main>
  );
};

export default Tweets;
