import "./styles.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
function Navigation() {
  let navigate = useNavigate();
  const navigateToForum = () => {
    navigate("/searchorCreateAccount");
  };
  const navigateToGroup = () => {
    navigate("/choose");
  };
  const navigateToProfile = () => {
    navigate("/yourProfile");
  };
  const navigateToFYourGroups = () => {
    navigate("/AllYourGroups");
  };
  return (
    <nav>
      <h3>Study Buddy</h3>
      <ul>
        <li>
          <Button onClick={navigateToFYourGroups} variant="warning">
            Your Groups
          </Button>
        </li>
        <li>
          <Button onClick={navigateToForum} variant="secondary">
            Forum
          </Button>
        </li>
        <li>
          <Button onClick={navigateToGroup} variant="light">
            Search Groups
          </Button>
        </li>
        <li>
          <Button onClick={navigateToProfile} variant="success">
            Profile
          </Button>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
