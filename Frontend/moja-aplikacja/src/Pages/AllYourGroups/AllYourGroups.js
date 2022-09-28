import Navigation from "../../Navigation";
import "./styles.css";
import Form from "react-bootstrap/Form";
import SingleGroup from "./SingleGroup";
import YourGroupChat from "./YourGroupChat";
import YourGroupSettings from "./GroupSettings"
function AllYourGroups() {
  return (
    <>
      <Navigation />
      <div className="your-groups-section">
        <div className="your-groups-section-allGroups">
          <h4>Your Groups</h4>
          <Form.Group className="mb-3 your-group-section-input">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Search by name" />
          </Form.Group>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <>
                <SingleGroup key={index} />
              </>
            );
          })}
        </div>
        <YourGroupChat/>
        <YourGroupSettings/>
      </div>
    </>
  );
}

export default AllYourGroups;
