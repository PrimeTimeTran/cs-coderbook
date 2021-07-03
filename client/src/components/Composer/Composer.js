import React, {useState} from "react";
import { Card, Form, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const ComposerButton = ({ title, icon, widget }) => {
  const onClickButton = () => {
    if (widget) {
      widget.open()
    }
  }
    return (
      <Button onClick={onClickButton} className="d-flex justify-content-center align-items-center bg-light bg-white text-dark border-0 rounded-md">
        {" "}
        <FontAwesomeIcon icon={icon} className="mr-2" size="lg" />
        {title}
      </Button>
    );
};

export default function Composer() {
  const [imageUrl, setImageUrl] = useState('')
  const [images, setImages] = useState([])

  // const widget = window.cloudinary.createUploadWidget(
  //   {
  //     cloudName: "primetimetran",
  //     uploadPreset: "Coderbook Demo Treo2",
  //     folder: "coderbook",
  //   },
  //   (error, result) => {
  //     console.log({ result });
  //     if (result.event === 'success') {
  //       setImageUrl(result.info.url)
  //     }
  //   },
  // );

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
    <Card className="mb-3 w-100 shadow composer-card">
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

      <img src={imageUrl}/>

      <input type="file" onChange={onChangeImage} />

      <button onClick={onCreatePost} >Post</button>

      <ButtonGroup size="lg" className="m-2">
        <ComposerButton title="Live Video" icon="video" />
        <ComposerButton
          title="Photo Video"
          icon="photo-video"
          // widget={widget}
        />
        <ComposerButton title="Feeling/Activity" icon="smile" />
      </ButtonGroup>
    </Card>
  );
}
