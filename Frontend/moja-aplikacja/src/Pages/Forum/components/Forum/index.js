import Navigation from "../../../../Navigation";
import { useEffect, useState } from "react";
import { getPosts } from "../../fetchData/getPosts";
import ForumContainer from "../forumContainer";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createPostFunc } from "../../fetchData/createPost";
import "./style.css";
function Forum() {
  const [forumProperties, setForumProperties] = useState([]);
  useEffect(() => {
    getPosts(setForumProperties);
  }, []);
  const createPost = (e) => {
    e.preventDefault();
    createPostFunc();
    // navigate("/forum");
  };
  return (
    <>
      <Navigation />
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <div className="search-group-container-btn">
            <Button type="submit" variant="secondary">
              Create Post
            </Button>
          </div>
        </Form>
      </div> */}
      <div className="forum">
        <div>
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
              <Button type="submit" variant="secondary">
                Create Post
              </Button>
            </div>
          </Form>
         <ForumContainer />
        </div>
        {forumProperties.map((item, index) => {
          return <ForumContainer key={index} prop={item} />;
        })}
      </div>
    </>
  );
}

export default Forum;
