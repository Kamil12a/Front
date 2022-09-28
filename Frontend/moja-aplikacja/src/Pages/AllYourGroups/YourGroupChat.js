import "./styles.css";
import Form from "react-bootstrap/Form";
import sendMessage from "../../assets/send-message.png";
import { useRef, useState } from "react";

function YourGroupChat() {
  const [allmessages, setAllmessages] = useState([]);
  const message = useRef();
  const sendMessageFunc = () => {
    let msg = message.current.value;
    if (msg) {
      setAllmessages((data) => [...data, msg]);
      message.current.value = "";
    }
  };
  return (
    <>
      <div className="your-groups-chat">
        <div className="your-groups-chat-header">
          <h3>Analiza Matematyczna</h3>
        </div>
        <div className="your-groups-chat-messages">
          {allmessages.map((item, index) => {
            return (
              <>
                <div className="singleMessage-container">
                  <p className="singleMessage" key={item + index}>
                    {item}
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <Form.Group className="mb-3 your-group-chat-input">
          <Form.Label></Form.Label>
          <Form.Control ref={message} type="text" />
          <img
            onClick={sendMessageFunc}
            className="your-group-chat-input-sendmsg"
            src={sendMessage}
          ></img>
        </Form.Group>
      </div>
    </>
  );
}

export default YourGroupChat;
