import React from "react";
import {
  Col,
  Form,
  Card,
  Button,
  ListGroup,
  ButtonGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
import {randonNumber} from '../../utils'

import avatar from "../../assets/avatar.png";

const COMMENTS = [
  {
    id: "_ta03403",
    body: `What is HTML? Do I smell?`,
    user: {
      name: "Foo Spam",
    },
  },
  {
    id: "_gjuu3obad",
    body: `What is Flex? I get paid fat checks!`,
    user: {
      name: "Spam Ham",
    },
  },
  {
    id: "_whqv3ptvq",
    body: `What is state? My life, my fate.`,
    user: {
      name: "Fizz Fuzz",
    },
  },
];

const Avatar = (props) => {
  return <img alt="profile" className="rounded-circle" src={avatar} />;
};

/* STEP 4 */
const CommentForm = () => {
  return (
    <Form>
      <Form.Row>
        <Col className="d-flex">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Write a comment..."
            className="border-0 rounded-md bg-light"
          />
        </Col>
      </Form.Row>
    </Form>
  );
};

const Comment = ({ body, user }) => {
  return (
    <ListGroupItem className="justify-content-start border-bottom-0 pr-0 py-0">
      <Avatar url={user.avatarUrl} />
      <div className="col">
        <div className="comment-bubble">
          <div className="font-weight-bold">{user.name}</div>
          <p>{body}</p>
        </div>
      </div>
    </ListGroupItem>
  );
};

const PostComments = (props) => {
  return (
    <Card.Body>
      <ListGroup className="list-group-flush">
        {props.comments.map((c) => (
          <Comment key={c.id} {...c} />
        ))}
      </ListGroup>
    </Card.Body>
  );
};

const POST_ACTIONS = [
  { title: "Like", icon: "thumbs-up" },
  { title: "Comment", icon: "comment" },
  { title: "Share", icon: "share" },
];

const PostActionButton = ({ title, icon }) => {
  return (
    <Button className="bg-light bg-white text-dark border-0">
      {" "}
      <FontAwesomeIcon
        size="lg"
        icon={icon}
        color="black"
        className="mr-2 action-icon"
      />
      {title}
    </Button>
  );
};

const PostActions = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      {POST_ACTIONS.map((a) => {
        return <PostActionButton key={a.title} {...a} />;
      })}
    </ButtonGroup>
  );
};

const PostReactions = () => {
  return (
    <div className="d-flex justify-content-between my-2 mx-3">
      <p className="mb-0">Tan Vo, Tuan Hoang and {randonNumber(100)} others</p>
      <p className="mb-0">{randonNumber(100)} comments</p>
    </div>
  );
};

function PostHeader({ author }) {
  return (
    <div className="d-flex align-items-center p-3">
      <Avatar />
      <h3 className="font-weight-bold ml-3">{author || "Anonymous"}</h3>
    </div>
  );
}



export default function Post({ children, author, image }) {
  return (
    <Card className="p-3 mb-3 shadow rounded-md vw-75">
      <PostHeader author={author} />
      <div class="py-2">{children}</div>
      <Card.Img variant="top" src={image} />
      <PostReactions />
      <hr className="my-1" />
      <PostActions />
      <hr className="mt-1" />
      <PostComments comments={COMMENTS} />
      <CommentForm />
    </Card>
  );
}
