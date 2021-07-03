import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

import { sampleImage } from '../../utils'

import Post from "../../components/Post";
import Composer from "../../components/Composer";

const SIDEBAR_BUTTONS = [
  {
    title: "Foos",
    icon: "users",
  },
  {
    title: "Friends",
    icon: "users",
  },
  {
    title: "Events",
    icon: "calendar",
  },
  {
    title: "Groups",
    icon: "user-friends",
  },
  {
    title: "Pages",
    icon: "flag",
  },
  {
    title: "See More",
    icon: "angle-down",
  },
];

const SidebarButton = ({ title, icon }) => {
  return (
    <Button className="d-flex align-items-center sidebar-button border-0 text-dark btn-light">
      {" "}
      <FontAwesomeIcon icon={icon} size="lg" style={{ width: "4rem" }} />
      <span>{title}</span>
    </Button>
  );
};


export default function HomePage() {
  console.log({ foo: "HomePage" });
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {}, []);

  if (!isAuthenticated) return <Redirect to="/auth" />;

  return (
    <Row>
      <Col className="d-flex flex-column pl-1 mt-3">
        <ButtonGroup vertical>
          {SIDEBAR_BUTTONS.map((b) => {
            return <SidebarButton key={b.title} {...b} />;
          })}
        </ButtonGroup>
      </Col>
      <Col
        xs={5}
        id="scrollingElement"
        className="d-flex flex-column align-items-center posts-container"
      >
        <Composer />
        <Post author="Truth" image={sampleImage()}>
          💯
        </Post>
        <Post author="Jaguar Student" image={sampleImage()}>
          It is up to me 💯
        </Post>
        <Post author="Charles Lee" image={sampleImage()}>
          Can we make it more 🔥 ...?
        </Post>
        <Post author="Incredible Developer" image={sampleImage()}>
          This template includes the use of HTML, CSS, ES6, React, Redux, NPM,
          Node, React Native, Bootstrap, Flex, & so much more. lol =).
        </Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
        <Post image={sampleImage()}></Post>
      </Col>
      <Col></Col>
    </Row>
  );
}
