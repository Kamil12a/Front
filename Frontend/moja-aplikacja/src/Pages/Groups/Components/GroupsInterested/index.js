import { useEffect, useState } from "react";
import GroupLook from "../GroupLook";
import {getGroups} from "../../fetchData/getGroups"
import { useNavigate } from "react-router-dom";
import Navigation from "../../../../Navigation";
import Button from "react-bootstrap/Button";
import "./styles.css";
function Group() {
  let navigate = useNavigate();
  const [groupProperties, setGroupProperties] = useState([]);
  useEffect(() => {
    getGroups(setGroupProperties);
  }, []);
  const navigateToModal = () => {
    navigate("/group/createGroup");
  };
  const joinToGroup = () => {
    let confirm = window.confirm("are u sure?");
    if (confirm) {
      navigate("/YourGroups");
    }
  };
  return (
    <>
      <Navigation />
      <div className="group-section ">
        {groupProperties.map((groupProp, index) => {
          return (
            <GroupLook
            buttonText={"Join to group"}
              key={index}
              description={groupProp.shortDescription}
              id={groupProp.id}
              groupOwnerId={groupProp.groupOwnerId}
              functionOnClickBtn={joinToGroup}
            />
          );
        })}
        <Button
          onClick={navigateToModal}
          className="create-group"
          variant="secondary"
        >
          Create Group
        </Button>
      </div>
    </>
  );
}

export default Group;
