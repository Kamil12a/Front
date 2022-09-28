import Button from "react-bootstrap/Button";
import Navigation from "../../../../Navigation";
import Form from "react-bootstrap/Form";
import "./style.css";
import { useNavigate } from "react-router-dom";

function ChooseTypeOfGroups() {
  let navigate = useNavigate();

  const goToGroups = () => {
    navigate("/groups");
  };
  return (
    <>
      <Navigation />
      <div className="chooseTypeOfGroups">
        <Form onSubmit={goToGroups} className="chooseTypeOfGroups-form">
          <div>
            <Form.Label>what topic are you interested in?</Form.Label>
            <Form.Select required>
              <option value="1">Math</option>
              <option value="2">Physics</option>
              <option value="3">English</option>
            </Form.Select>
          </div>

          <Button variant="secondary" type="submit">
            Search
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ChooseTypeOfGroups;
