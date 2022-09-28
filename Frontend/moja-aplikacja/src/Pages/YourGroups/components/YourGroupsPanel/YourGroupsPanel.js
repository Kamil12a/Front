import GroupLook from "../../../Groups/Components/GroupLook";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../../Navigation";
function YourGroupsPanel() {
  let navigate = useNavigate();

  const functionOnClickBtn = () => {
    navigate("/AllYourGroups");
  };
  return (
    <>
      <Navigation />
      <GroupLook
        buttonText={"Check Details"}
        description={"xd"}
        id={1}
        groupOwnerId={"xd"}
        functionOnClickBtn={functionOnClickBtn}
      />
    </>
  );
}

export default YourGroupsPanel;
