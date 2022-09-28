import "./styles.css";
import Button from "react-bootstrap/Button";

function YourGroupSettings() {
  const beAtutor = () => {
     window.confirm("Are you sure?");
  };
  return (
    <>
      <div className="your-groups-settings">
        <div className="your-groups-settings-panel">
          <h5>
            {" "}
            group owner: <span>Kamil Plewka</span>
          </h5>
        </div>
        <div className="your-groups-settings-panel">
          <h5>
            {" "}
            date: <span>13.02.2022</span>
          </h5>
        </div>
        <div className="your-groups-settings-panel">
          <h5>
            {" "}
            place: <span>none</span>
          </h5>
        </div>
        <div className="your-groups-settings-panel-tutor">
          <p>This group doesn't have a tutor, do you want to become one?</p>
          <Button
            onClick={beAtutor}
            className="log-in-component-container-form-section-submit"
            variant="primary"
          >
            Start teaching
          </Button>
        </div>
      </div>
    </>
  );
}

export default YourGroupSettings;
