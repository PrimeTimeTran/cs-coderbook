import React, {useState} from "react";
import { Card, Form, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import { windowSize } from "../../utils"

const ComposerButton = ({ title, icon, widget }) => {
  const onClickButton = () => {
    if (widget) {
      widget.open()
    }
  }
    return (
      <Button
        onClick={onClickButton}
        className="d-flex justify-content-center align-items-center bg-light bg-white text-dark border-0 rounded-md composer-button"
      >
        {" "}
        <FontAwesomeIcon icon={icon} className="mr-2" size={windowSize()} />
        {title}
      </Button>
    );
};

export default function Composer() {
  const [images, setImages] = useState([])

  const onChangeImage = (e) => {
    setImages([...images, e.target.files[0]]);
  }

  const onCreatePost = (e) => {
    e.preventDefault()

    const form = new FormData()
    form.append('file', images)

    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",

      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(form),
    });
  }

  return (
    <Card className="mb-3 w-100 shadow composer-card p-2">
      <Card.Body className="px-3 pt-3">
        {" "}
        {/* STEP 2 */}
        <Form>
          <Form.Group>
            <Form.Control
              id="body"
              type="text"
              placeholder="What's on your mind?"
              className="border-0 rounded-md post-text"
            />
          </Form.Group>
        </Form>
      </Card.Body>
      <hr className="mt-0" />

      <Button onClick={onCreatePost}>Post</Button>

      <ButtonGroup size="lg" className="m-2">
        <ComposerButton title="Live Video" icon="video" />
        <ComposerButton
          title="Photo Video"
          icon="photo-video"
        />
        <ComposerButton title="Feeling/Activity" icon="smile" />
      </ButtonGroup>
    </Card>
  );
}
