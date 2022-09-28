import Navigation from "../../../../Navigation";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { createPostFunc } from "../../fetchData/createPost";
function SearchorCreateAccount() {
  let navigate = useNavigate();

  const nagivateToForum = () => {
    navigate("/forum");
  };

  return (
    <>
      <Navigation />
      <div className="search-create-group-section">
        {/* <div>
          <h4>Create Post</h4>
          <Form onSubmit={createPost} className="create-group-container">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Label>Choose topic</Form.Label>
              <Form.Select required>
                <option value="1">Math</option>
                <option value="2">Physics</option>
                <option value="3">English</option>
              </Form.Select>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="search-group-container-btn">
              <Button type="submit" variant="secondary">Create Post</Button>
            </div>
          </Form>
        </div> */}
        <div>
          <h4>Go to Forum</h4>
          <Form className="chooseTypeOfGroups-form">
            <div>
              <Form.Label>what topic are you interested in?</Form.Label>
              <Form.Select required>
                <option value="1">Math</option>
                <option value="2">Physics</option>
                <option value="3">English</option>
              </Form.Select>
            </div>
            <Button onClick={nagivateToForum} variant="secondary" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default SearchorCreateAccount;
