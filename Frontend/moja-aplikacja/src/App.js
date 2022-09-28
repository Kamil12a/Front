import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Group from "./Pages/Groups/Components/GroupsInterested";
import CreateAccount from "./Pages/CreateAccount";
import ModalCreateGroup from "./Pages/Groups/Components/Modal-Create-Group/index.js";
import LogIn from "./Pages/logInSection";
import Forum from "./Pages/Forum/components/Forum";
import { useState } from "react";
import { ThemeContext } from "./Context/UserContext";
import ChooseTypeOfGroups from "./Pages/Groups/Components/ChooseTypeOfGroups/ChooseTypeOfGroups";
import SearchorCreateAccount from "./Pages/Forum/components/SearchOrCreateGroup";
import YourGroupsPanel from "./Pages/YourGroups/components/YourGroupsPanel/YourGroupsPanel";
import YourProfile from "./Pages/Profile/YourProfile/YourProfile";
import AllYourGroups from "./Pages/AllYourGroups/AllYourGroups";
function App() {
  const [userDataAccount, setUserDataAccount] = useState({ username: "" });
  return (
    <ThemeContext.Provider value={{ userDataAccount, setUserDataAccount }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LogIn />}></Route>
          <Route path="/forum" element={<Forum />}></Route>
          <Route path="/createAccount" element={<CreateAccount />}></Route>
          <Route path="/groups" element={<YourGroupsPanel />}></Route>
          <Route path="/choose" element={<ChooseTypeOfGroups />}></Route>
          <Route path="/AllYourGroups" element={<AllYourGroups />}></Route>

          <Route
            path="/searchOrCreateAccount"
            element={<SearchorCreateAccount />}
          ></Route>
          <Route
            path="/group/createGroup"
            element={<ModalCreateGroup />}
          ></Route>
           <Route
            path="/yourProfile"
            element={<YourProfile/>}
          ></Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
