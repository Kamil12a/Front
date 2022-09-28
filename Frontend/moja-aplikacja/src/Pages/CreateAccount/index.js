import "./style.css";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  let navigate = useNavigate();
  const createAccount=(e)=>{
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div className="create-account">
        <div className="create-account-modal">
          <div className="log-in-component-container-header">
            <img
              className="log-in-component-container-header-logo"
              src={logo}
            ></img>
          </div>
          <Form onSubmit={createAccount} className="log-in-component-container-form">
            <div className="log-in-component-container-form-lane">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="log-in-component-container-form-lane-input">
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="log-in-component-container-form-lane-input">
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </div>
            <div className="log-in-component-container-form-lane">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="log-in-component-container-form-lane-input">
                  Phone number (xxx-xxx-xxx)
                </Form.Label>
                <Form.Control
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="Phone number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="log-in-component-container-form-lane-input">
                  Name
                </Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
            </div>
            <div className="log-in-component-container-form-lane">
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="log-in-component-container-form-lane-input">
                  Surname
                </Form.Label>
                <Form.Control type="text" placeholder="Surname" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="log-in-component-container-form-lane-input">
                what interests you?
              </Form.Label>
            </Form.Group>
            <div className="mb-3 subject-Choose-Section">
              <Form.Check inline label="Math" name="group1" />
              <Form.Check inline label="Modeling" name="group1" />
              <Form.Check inline label="Physics" />
              <Form.Check inline label="Math" name="group1" />
              <Form.Check inline label="Modeling" name="group1" />
              <Form.Check inline label="Physics" />
            </div>

            <div className="log-in-component-container-form-section">
              <Button
                className="log-in-component-container-form-section-submit"
                variant="primary"
                type="submit"
              >
                Create account
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
